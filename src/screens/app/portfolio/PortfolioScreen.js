import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import FeaturedStockCard from '../../../components/featuredStockCard'
import colors from '../../../assets/colors/theme'
import stocks from '../../../data/stocks'
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class PortfolioScreen extends Component {

  constructor() {
    super()
    this.state = {
      watchlist: []
    }
  }

  componentDidMount() {
    const currentID = this.props.authUser
    console.log(currentID)

    // this.ref.collection('users').doc(currentID).update({
    //   watchlist: firebase.firestore.FieldValue.arrayUnion(stock)
    // })

    firebase.firestore().collection('users').doc(currentID).get()
      .then((doc) => {
        if (doc.exists) {

          const data = doc._data.watchlist
          this.setState({ watchlist: data })
          this.displayWatchlist(this.state.watchlist)
          console.log(data)

        } else {
          alert('this user does not exists')
        }
      })
  }

  displayWatchlist = (watchlist) => {

    let i = 0
    return watchlist.map((element) => {
      i += 1
      return (
        <View key={i} style={styles.stockCard}>
          <FeaturedStockCard stock={stocks[element]} />
        </View>
      )

    })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.topBackground}>
            <View style={styles.headerStats}>
              <TouchableOpacity style={styles.statsContainer}>
                <Text style={styles.stats}>{this.state.watchlist.length}</Text>
                <Text style={styles.statsDesc}>stocks</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.statsContainer}>
                <Text style={styles.stats}>420</Text>
                <Text style={styles.statsDesc}>followers</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerBtn}>
                <Text style={styles.headerBtnText}>Settings</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.profilePic}>
              <Image 
                source={require('../../../assets/images/kieranprofile.jpg')} 
                resizeMode={'center'}
                style={styles.pic}
              />
          </TouchableOpacity>
          <View style={styles.profileName}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{this.props.authUserName}</Text>
              <Text style={styles.subtitle}>CEO of MEMELAND</Text>
            </View>
          </View>
        </View>
       
        
          {this.displayWatchlist(this.state.watchlist)}
        
        <View style={styles.marginBottom} />
        

      </ScrollView >
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.authUser.id,
  authUserName: state.authUser.name
  // userID: state.userID,
})

export default connect(mapStateToProps)(PortfolioScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    alignItems: 'center'
  },
  header: {
    width: width,
    alignItems: 'center'
  },
  topBackground: {
    backgroundColor: colors.blue,
    top: 0,
    width: width,
    height: height * 0.18,
    position: 'absolute',
    flexDirection: 'row',
  },
  headerStats: {
    flexDirection: 'row',
    marginLeft: '37%',
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  statsContainer: {
    alignItems: 'center',
    padding: 9
  },
  statsDesc: {
    color: colors.main
  },
  stats: {
    fontWeight: 'bold',
    color: colors.main,
    fontSize: 22
  },
  headerBtn: {
    backgroundColor: colors.orange,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    margin: 10,
    elevation: 4
  },
  headerBtnText: {
    color: colors.main,
    fontSize: 16,
    fontWeight: 'bold'
  },
  profilePic: {
    width: 120,
    height: 120,
    backgroundColor: 'pink',
    position: 'absolute',
    left: width * 0.06,
    top: height * 0.02,
    zIndex: 1000,
    borderRadius: 1000,
    elevation: 4
  },
  profilePicContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'green',
    borderRadius: 1000
  },
  pic: {
    borderRadius: 1000,
    height: '100%',
    width: '100%'
  },
  profileName: {
    backgroundColor: colors.main,
    marginTop: height * 0.1,
    height: height * 0.12,
    width: width * 0.95,
    borderRadius: 7,
    justifyContent: 'center',
    elevation: 4
  },
  nameContainer: {
    marginLeft: '40%',
  },
  name: {
    lineHeight: 33,
    fontSize: 28
  },
  subtitle: {
    fontSize: 15
  },
  stockCard: {
    height: height * 0.325,
    width: '95%',
    backgroundColor: 'white',
    // borderWidth: 1,
    borderRadius: 7,
    // borderColor: '#ddd',
    // borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 4,
    marginTop: 10,
  },
  marginBottom: {
    height: 10
  }


});