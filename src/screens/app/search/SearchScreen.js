import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";
import FeaturedStockCard from '../../../components/featuredStockCard'
import colors from '../../../assets/colors/theme'
import stocks from '../../../data/stocks'
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class SearchScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('PortfolioScreenContainer')} style={styles.headerIcons}></TouchableOpacity>
          <Text onPress={() => this.props.navigation.navigate('SearchScreenContainer')} style={styles.headerSearch}></Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DashBoardScreenContainer')} style={styles.headerIconsRight}></TouchableOpacity>
        </View>
        <TextInput autoFocus={true}>Search....</TextInput>
      </View>
    )  
  }
}

const mapStateToProps = state => ({
  authUser: state.authUser.id,
  authUserName: state.authUser.name
  // userID: state.userID,
})

export default connect(mapStateToProps)(SearchScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    alignItems: 'center'
  },
  header: {
    height: 57,
    backgroundColor: '#4277B7',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    elevation: 10
  },
  headerIcons: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'white',
    marginLeft: '5%',
    alignSelf: 'center',
    marginTop: 10,
  },
  headerIconsRight: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'white',
    marginRight: '5%',
    alignSelf: 'center',
    marginTop: 10,
  },
  headerSearch: {
    flex: 1,
    height: 39,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    marginHorizontal: 30,
    marginBottom: 9
  },


});