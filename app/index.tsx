import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Breakfast items data
  const breakfastItems = [
    { name: 'Pancakes', price: 'R140', category: 'Breakfast' },
    { name: 'Omelette', price: 'R200', category: 'Breakfast' },
    { name: 'French Toast', price: 'R90', category: 'Breakfast' },
    { name: 'Breakfast Burrito', price: 'R180', category: 'Breakfast' },
    { name: 'Avocado Toast', price: 'R80', category: 'Breakfast' },
  ];

  // Lunch items data
  const lunchItems = [
    { name: 'Grilled Chicken Sandwich', price: 'R250', category: 'Lunch' },
    { name: 'Caesar Salad', price: 'R160', category: 'Lunch' },
    { name: 'Cheeseburger', price: 'R240', category: 'Lunch' },
    { name: 'Tuna Wrap', price: 'R190', category: 'Lunch' },
    { name: 'Veggie Pizza', price: 'R200', category: 'Lunch' },
  ];

  // Dinner items data
  const dinnerItems = [
    { name: 'Steak and Potatoes', price: 'R300', category: 'Dinner' },
    { name: 'Salmon Fillet', price: 'R260', category: 'Dinner' },
    { name: 'Chicken Alfredo', price: 'R240', category: 'Dinner' },
    { name: 'Lamb Chops', price: 'R285', category: 'Dinner' },
    { name: 'Seafood Paella', price: 'R300', category: 'Dinner' },
  ];

  // Combine all items into a single list
  const allItems = [...breakfastItems, ...lunchItems, ...dinnerItems];

  // Filter items based on the search term
  const filteredItems = allItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Logo */}
        <ImageBackground
          source={require('../assets/logo.png')}
          style={styles.logo}
        />

        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search by item or category..."
          placeholderTextColor="#999"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />

        {/* Panels */}
        <View style={styles.panelContainer}>
          {/* Breakfast Panel */}
          <TouchableOpacity style={styles.panel}>
            <ImageBackground
              source={require('../assets/panel1.png')}
              style={styles.backgroundImage}
              imageStyle={styles.imageStyle}
            >
              <Text style={styles.panelText}>Breakfast</Text>
            </ImageBackground>
          </TouchableOpacity>

          {/* Lunch Panel */}
          <TouchableOpacity style={styles.panel}>
            <ImageBackground
              source={require('../assets/panel2.png')}
              style={styles.backgroundImage}
              imageStyle={styles.imageStyle}
            >
              <Text style={styles.panelText}>Lunch</Text>
            </ImageBackground>
          </TouchableOpacity>

          {/* Dinner Panel */}
          <TouchableOpacity style={styles.panel}>
            <ImageBackground
              source={require('../assets/panel3.png')}
              style={styles.backgroundImage}
              imageStyle={styles.imageStyle}
            >
              <Text style={styles.panelText}>Dinner</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        {/* Display Filtered Items */}
        <View>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <Text style={styles.itemCategory}>{item.category}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noResultsText}>No items found. Please try a different search term.</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
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
  panelContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  panel: {
    height: 150,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 15,
  },
  panelText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
  itemCategory: {
    fontSize: 12,
    color: '#aaa',
    fontStyle: 'italic',
  },
  noResultsText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
    fontSize: 16,
  },
});
