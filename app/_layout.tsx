import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='index' options={{title:'Menu'}}/>
        <Tabs.Screen name='about' options={{title: 'Add Item'}}/>

    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})