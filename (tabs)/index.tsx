import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MenuItem, StackParamList } from './types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

{
  "main"; "expo-router/entry"
}
{
  "scheme"; "comeNdine-app-scheme"
}
{
  "web"; {
    "bundler"; "metro"
  }
}
module.exports = function (api: { cache: (arg0: boolean) => void; }) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};



// Define the type for navigation with StackParamList
type HomeScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Chef Christoffel's Menu</Text>
      <Text>Total items: {menuItems.length}</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.name} - {item.course}</Text>
            <Text>{item.description}</Text>
            <Text>Price: ${item.price}</Text>
          </View>
        )}
      />

      <Button 
        title="Add Menu Item" 
        onPress={() => navigation.navigate('AddMenuItem', { setMenuItems })}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
  },
  menuItem: {
    marginBottom: 15,
  },
});

export default HomeScreen;
