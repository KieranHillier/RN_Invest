import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import DiscoverStockScreen from './headings/DiscoverStockScreen'
import DiscoverPeopleScreen from './headings/DiscoverPeopleScreen'
import DiscoverGroupsScreen from './headings/DiscoverGroupsScreen'
import DetailedStockScreen from '../other/detailedStock'

import colors from '../../../assets/colors/theme'

const StockScreen = {
    screen: DiscoverStockScreen,
    navigationOptions: {}
  }
  
  const PeopleScreen = {
    screen: DiscoverPeopleScreen,
    navigationOptions: {}
  }
  
  const GroupsScreen = {
    screen: DiscoverGroupsScreen,
    navigationOptions: {}
  }

  const DetailedStock = {
    screen: DetailedStockScreen,
    navigationOptions: {}
}

  const stackStyle = {
      navigationOptions: {
          header: null
      }
  }

//   const StockScreenStackNavigator = createStackNavigator({
//     StockScreen,
//     DetailedStock
//   }, stackStyle)
  
  const RouteConfig = {
    swipeEnabled: false,
    tabBarOptions: {
      style: {
        backgroundColor: colors.main,
        height: 50,
        justifyContent: 'center',
        paddingBottom: 10,
       
      },
      labelStyle: {
        color: colors.text,
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 20
        
      },
      indicatorStyle: {
          backgroundColor: colors.text,
          marginBottom: 7,
          alignSelf: 'center',
          width: 90,
          marginLeft: 16
      },
      tabStyle: {
          justifyContent: 'center',
          alignItems: 'center'
      }
    }
  }
  
const DiscoverScreen = createMaterialTopTabNavigator({
    Stocks: StockScreen,
    People: PeopleScreen,
    Groups: GroupsScreen
}, RouteConfig)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
});

export default DiscoverScreen