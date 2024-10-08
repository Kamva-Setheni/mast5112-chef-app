import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import React from 'react';

const Home = () => {
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

  return (
    <ScrollView>
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        placeholderTextColor="#999"
      />

      {/* Panels */}
      <View style={styles.panelContainer}>
        {/* Panel 1 */}
        <TouchableOpacity style={styles.panel}>
          <ImageBackground
            source={require('../assets/panel1.png')} // Replace with actual image path
            style={styles.backgroundImage}
            imageStyle={styles.imageStyle}
          >
            <Text style={styles.panelText}>Breakfast</Text>
          </ImageBackground>
          </TouchableOpacity>

          {/* Breakfast Items */}
          <View style={styles.breakfastContainer}>
              {breakfastItems.map((item, index) => (
                <View key={index} style={styles.breakfastItem}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                </View>
              ))}
            </View>
        
        {/* Panel 2 */}
        <TouchableOpacity style={styles.panel}>
          <ImageBackground
            source={require('../assets/panel2.png')} // Replace with actual image path
            style={styles.backgroundImage}
            imageStyle={styles.imageStyle}
          >
            <Text style={styles.panelText}>Lunch</Text>
          </ImageBackground>
        </TouchableOpacity>

        {/* Lunch Items Under Panel 2 */}
        <View style={styles.lunchContainer}>
            {lunchItems.map((item, index) => (
              <View key={index} style={styles.menuItem}>
                <Text style={styles.lunchName}>{item.name}</Text>
                <Text style={styles.lunchPrice}>{item.price}</Text>
              </View>
            ))}
          </View>


        {/* Panel 3 */}
        <TouchableOpacity style={styles.panel}>
          <ImageBackground
            source={require('../assets/panel3.png')} // Replace with actual image path
            style={styles.backgroundImage}
            imageStyle={styles.imageStyle}
          >
            <Text style={styles.panelText}>Panel 3</Text>
          </ImageBackground>
        </TouchableOpacity>

          {/* Dinner Items Under Panel 3 */}
          <View style={styles.menuContainer}>
            {dinnerItems.map((item, index) => (
              <View key={index} style={styles.menuItem}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            ))}
          </View>
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
    width: 150,  // Adjust size based on your logo
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
    height: 150,  // Adjust the height based on your design
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 15,  // Ensures the image is also rounded
  },
  panelText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
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
});
