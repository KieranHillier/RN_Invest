import { createStackNavigator } from 'react-navigation'
import colors from '../assets/colors/theme'
import React from "react";
import { View, Text, TextInput } from 'react-native'
import DetailedStockScreen from '../screens/app/other/detailedStock'
import DiscoverStockScreen from '../screens/app/discover/headings/DiscoverStockScreen'
import PortfolioScreen from '../screens/app/portfolio/PortfolioScreen'
import DashBoardScreen from '../screens/app/dashboard/DashBoardScreen'

createHeader = () => {
  return (
    <View style={{height: 55, backgroundColor: colors.main, justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-end'}}>
      <View onPress={() => {}} style={{width: 30, height: 30, borderRadius: 20, backgroundColor: colors.text, marginLeft: '5%', alignSelf: 'center', marginTop: 10}}></View>
      <TextInput style={{flex: 1, height: 31, backgroundColor: '#E3E3E3', borderRadius: 12, marginHorizontal: 30, marginBottom: 5}}></TextInput>
      <View style={{width: 30, height: 30, borderRadius: 20, backgroundColor: colors.text, marginRight: '5%', alignSelf: 'center', marginTop: 10}}></View>
    </View>
  )
}

const DiscoverTopNavigator = {
  screen: DiscoverStockScreen,
  navigationOptions: {
    header: null,
    title: 'Discover',
    headerTintColor: colors.text,
    headerStyle: {
      backgroundColor: colors.main,
      elevation: 0, // remove shadow on Android
      shadowOpacity: 0, // remove shadow on iOS,
      height: 50,
    },
  },
}

const DetailedStockss = {
  screen: DetailedStockScreen,
  navigationOptions: ({ navigation }) => ({
    title: navigation.state.params.stock.stockName,
    headerTintColor: colors.main,
    headerStyle: {
      backgroundColor: colors.blue
    }
  })
}

const DashBoardScreenContainer = {
  screen: DashBoardScreen
}

const PortfolioScreenContainer = {
  screen: PortfolioScreen,
  navigationOptions: {
    title: 'Watchlist',
    headerTintColor: colors.main,
    headerStyle: {
      backgroundColor: colors.blue,
      elevation: 8, // remove shadow on Android
      shadowOpacity: 0, // remove shadow on iOS,
      height: 50,
    },
  },
}

const AppDrawerNavigator = createStackNavigator({
  DiscoverTopNavigator,
  Details: DetailedStockss,
  PortfolioScreenContainer,
  DashBoardScreenContainer,
})

export default AppDrawerNavigator