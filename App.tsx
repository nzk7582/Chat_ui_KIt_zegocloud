import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import AppNavigation from './src/navigations/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  
  return (
    <NavigationContainer>
    <SafeAreaProvider style={{flex:1}}>
      <SafeAreaView style={{flex:1}}>
     <AppNavigation/>
      </SafeAreaView>
    </SafeAreaProvider> 
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})