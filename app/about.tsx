import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import React from 'react'

const About = () => {
  // Breakfast items data
  const breakfastItems = [
    { name: 'Pancakes', price: 'R140' },
    { name: 'Omelette', price: 'R200' },
    { name: 'French Toast', price: 'R90' },
    { name: 'Breakfast Burrito', price: 'R180' },
    { name: 'Avocado Toast', price: 'R80' },
  ];

 // Lunch items data
 const lunchItems = [
  { name: 'Grilled Chicken Sandwich', price: 'R250' },
  { name: 'Caesar Salad', price: 'R160' },
  { name: 'Cheeseburger', price: 'R240' },
  { name: 'Tuna Wrap', price: 'R190' },
  { name: 'Veggie Pizza', price: 'R2oo' },
];

// Dinner items data
const dinnerItems = [
  { name: 'Steak and Potatoes', price: 'R300' },
  { name: 'Salmon Fillet', price: 'R260' },
  { name: 'Chicken Alfredo', price: 'R240' },
  { name: 'Lamb Chops', price: 'R285' },
  { name: 'Seafood Paella', price: 'R300' },
];

// Function to extract numeric value from price string and sum up the total
const totalAmount = [...breakfastItems, ...lunchItems, ...dinnerItems].reduce(
  (sum, item) => sum + parseInt(item.price.replace('R', ''), 10),
  0
);
  return (
    <ScrollView>
    <View>
      {/* Breakfast Items */}
      <View style={styles.breakfastContainer}>
              {breakfastItems.map((item, index) => (
                <View key={index} style={styles.breakfastItem}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                </View>
              ))}
            </View>

         {/* Lunch Items Under Panel 2 */}
         <View style={styles.lunchContainer}>
            {lunchItems.map((item, index) => (
              <View key={index} style={styles.menuItem}>
                <Text style={styles.lunchName}>{item.name}</Text>
                <Text style={styles.lunchPrice}>{item.price}</Text>
              </View>
            ))}
          </View>

          {/* Dinner Items Under Panel 3 */}
          <View style={styles.menuContainer}>
            {dinnerItems.map((item, index) => (
              <View key={index} style={styles.menuItem}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            ))}
          </View>

           {/* Total Amount */}
        <View style={styles.totalAmountContainer}>
          <Text style={styles.totalAmountText}>Total: R{totalAmount}</Text>
        </View>
    </View>
    </ScrollView>
  )
}

export default About;

const styles = StyleSheet.create({

  breakfastContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 10,
  },
  breakfastItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#888',
  },
  lunchContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
  },
  lunchName: {
    fontSize: 16,
    fontWeight: '500',
  },
  lunchPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#888',
  },
  menuContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 10,
  },
  totalAmountContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  totalAmountText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },


})