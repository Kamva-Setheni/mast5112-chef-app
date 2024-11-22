import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

// Define the structure of a food item
interface FoodItem {
  name: string;
  price: number;
  category: string;
}

const About = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [cart, setCart] = useState<FoodItem[]>([]);

  // Breakfast items data
  const breakfastItems: FoodItem[] = [
    { name: 'Pancakes', price: 140, category: 'Breakfast' },
    { name: 'Omelette', price: 200, category: 'Breakfast' },
    { name: 'French Toast', price: 90, category: 'Breakfast' },
    { name: 'Breakfast Burrito', price: 180, category: 'Breakfast' },
    { name: 'Avocado Toast', price: 80, category: 'Breakfast' },
  ];

  // Lunch items data
  const lunchItems: FoodItem[] = [
    { name: 'Grilled Chicken Sandwich', price: 250, category: 'Lunch' },
    { name: 'Caesar Salad', price: 160, category: 'Lunch' },
    { name: 'Cheeseburger', price: 240, category: 'Lunch' },
    { name: 'Tuna Wrap', price: 190, category: 'Lunch' },
    { name: 'Veggie Pizza', price: 200, category: 'Lunch' },
  ];

  // Dinner items data
  const dinnerItems: FoodItem[] = [
    { name: 'Steak and Potatoes', price: 300, category: 'Dinner' },
    { name: 'Salmon Fillet', price: 260, category: 'Dinner' },
    { name: 'Chicken Alfredo', price: 240, category: 'Dinner' },
    { name: 'Lamb Chops', price: 285, category: 'Dinner' },
    { name: 'Seafood Paella', price: 300, category: 'Dinner' },
  ];

  // Combine all items into a single list
  const allItems: FoodItem[] = [...breakfastItems, ...lunchItems, ...dinnerItems];

  // Filter items based on the search term
  const filteredItems = allItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add item to the cart
  const addToCart = (item: FoodItem) => {
    setCart([...cart, item]);
  };

  // Remove item from the cart
  const removeFromCart = (itemIndex: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(itemIndex, 1);
    setCart(updatedCart);
  };

  // Calculate total price
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search by item or category..."
          placeholderTextColor="#999"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />

        {/* Items List */}
        {filteredItems.length > 0 ? (
          <FlatList
            data={filteredItems}
            keyExtractor={(item, index) => `${item.name}-${index}`}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>R{item.price}</Text>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => addToCart(item)}
                >
                  <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        ) : (
          <Text style={styles.noItemsText}>
            No items found. Please try a different search term.
          </Text>
        )}

        {/* Cart */}
        <View style={styles.cartContainer}>
          <Text style={styles.cartHeader}>Cart</Text>
          {cart.map((item, index) => (
            <View key={index} style={styles.cartItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>R{item.price}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFromCart(index)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}

          {/* Total Price */}
          <Text style={styles.totalAmountText}>Total: R{totalAmount}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
  addButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  noItemsText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
  cartContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  cartHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  totalAmountText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
