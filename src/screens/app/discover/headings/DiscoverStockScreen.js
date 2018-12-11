import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Animated,
  PanResponder,
  Button,
  TouchableOpacity,
  ViewPagerAndroid,
  StatusBar,
  RefreshControl,
  TextInput
} from "react-native";
import { Row } from "native-base";
import colors from "../../../../assets/colors/theme";
import { AreaChart, Grid, LineChart } from "react-native-svg-charts";
import * as shape from 'd3-shape'
import FeaturedStockCard from '../../../../components/featuredStockCard'
import IndustryContainer from '../../../../components/industryContainer'
import firebase from 'react-native-firebase'
import google from '../../../../data/googl'
import { connect } from 'react-redux'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const stockCards = [{
  id: 0,
  stockName: "GOOGL",
  price: 1042.42,
  difference: 15.6,
  differencePercentage: 2.1,
  market: "NASDAQ",
  companyName: "Alphabet Inc",
  data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
  time: "3:43pm"
}, {
  id: 1,
  stockName: "TWTR",
  price: 73,
  difference: -15.6,
  differencePercentage: -2.1,
  market: "NASDAQ",
  companyName: "TWITTER",
  data: [95, -4, -24, 85, 91, 35, 53, 91, 35, 53, -53, 24, 50, 50, 10, 40, 95, -4, -24, 85, -20, -80, 50, 10, 40, -53, 24, 50, -20, -80],
  time: "3:43pm"
}, {
  id: 2,
  stockName: "AMAZN",
  price: 1742.42,
  difference: 1.6,
  differencePercentage: 0.1,
  market: "IDK",
  companyName: "Amazon",
  data: [-4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95],
  time: "3:43pm"
}, {
  id: 3,
  stockName: "FB",
  price: 92.42,
  difference: -23.6,
  differencePercentage: -4.1,
  market: "NASDAQ",
  companyName: "Facebook Inc",
  data: [50, 50, 50],
  time: "3:43pm"
}, {
  id: 4,
  stockName: "AQR",
  price: 2042.69,
  difference: 420.6,
  differencePercentage: 4.2,
  market: "NASDAQ",
  companyName: "Aquire",
  data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
  time: "3:43pm"
},
]

const googleData = google()
console.log(googleData)

let active = '#000000'

class DiscoverStockScreen extends Component {

  constructor(props) {
    super(props)

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0,
      currentIndex2: 0,
      refreshing: false,
      active: '#000000',
      featuredStocks: '',
    }
    this.ref = firebase.firestore()

  }

  componentWillMount() {

    // this.ref.collection('stocks').doc('MSFT').get().then((doc) => {
    //   if (doc.exists) {
    //     let featuredStocks = doc.data().closingPrice
    //     let dataArray = []
    //     featuredStocks.forEach((element) => {
    //       newItem = {
    //         closingPrice: Number(element.closingPrice),
    //         timeStamp: element.timeStamp
    //       }
    //       dataArray.push(newItem)
    //     });
    //     console.log(dataArray)

        

    //     this.setState({
    //       featuredStocks: dataArray
    //     })
    //   } else {
    //     console.log('No data');
    //   }
    // })
    // .catch((err) => {
    //   console.log(err)
    // })

    // console.log(this.ref)
    // var data = this.ref.collection('stocks').doc('asdasd').set({
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // })
    // .then(function() {
    //     console.log("Document successfully written!");
    // })
    // .catch(function(error) {
    //     console.error("Error writing document: ", error);
    // });

  }

  detailsPage = () => {
    this.props.navigation.navigate('People');
  }

  // onRefresh = () => {
  //     this.setState({refreshing: true})
  //     fetchData().then(() => {
  //         this.setState({refreshing: false})
  //     })
  // }

  switchFeatured = (e) => {
    // alert(e.nativeEvent.position)
    // active = 'pink'
    let newPosition = e.nativeEvent.position
    let previousPosition = this.state.currentIndex

    if (newPosition > previousPosition) {
      this.setState({
        currentIndex: previousPosition += 1
      })
    } else {
      this.setState({
        currentIndex: previousPosition -= 1
      })
    }

  }

  switchFeatured2 = (e) => {
    // alert(e.nativeEvent.position)
    // active = 'pink'
    let newPosition = e.nativeEvent.position
    let previousPosition = this.state.currentIndex2

    if (newPosition > previousPosition) {
      this.setState({
        currentIndex2: previousPosition += 1
      })
    } else {
      this.setState({
        currentIndex2: previousPosition -= 1
      })
    }

  }

  // watchlist = (stock) => {
  //   const currentID = this.props.authUser
  //   this.ref.collection('users').doc(currentID).update({
  //     watchlist: firebase.firestore.FieldValue.arrayUnion(stock)
  //   })
  // }

  // name={item.stockName}
  // price={item.price}
  // difference={item.difference}
  // differencePercentage={item.differencePercentage}
  // market={item.market}
  // companyName={item.companyName}
  // data={item.data}
  // time={item.time}

  renderCards = () => {
    return stockCards.map((item, i) => {

      return (
        <Animated.View key={item.id} navigation={this.props.navigation} style={styles.stockCard}>
          <FeaturedStockCard
            stock={item}
          />
        </Animated.View>
      )

    })
  }

  render() {

    const { currentIndex, currentIndex2 } = this.state

    return (
      <View style={styles.container}>

        <StatusBar backgroundColor='#004C87' barStyle='light-content' />

        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('PortfolioScreenContainer')} style={styles.headerIcons}></TouchableOpacity>
          <Text onPress={() => this.props.navigation.navigate('SearchScreenContainer')} style={styles.headerSearch}></Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DashBoardScreenContainer')} style={styles.headerIconsRight}></TouchableOpacity>
        </View>

        <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />} style={styles.foreground} showsVerticalScrollIndicator={false}>

          <Text style={styles.stockCardTitle}>HOT STOCKS</Text>
          <ViewPagerAndroid style={styles.stockCardContainer} initialPage={0} pageMargin={15} onPageSelected={this.switchFeatured2}>
            {this.renderCards()}
          </ViewPagerAndroid>

          <View style={{ alignSelf: 'flex-end', flexDirection: 'row', marginRight: '3%', marginTop: 10 }}>
            <View style={[styles.featuredDot, currentIndex2 == 0 ? styles.featuredDotActive : styles.featuredDotInactive]}></View>
            <View style={[styles.featuredDot, currentIndex2 == 1 ? styles.featuredDotActive : styles.featuredDotInactive]}></View>
            <View style={[styles.featuredDot, currentIndex2 == 2 ? styles.featuredDotActive : styles.featuredDotInactive]}></View>
            <View style={[styles.featuredDot, currentIndex2 == 3 ? styles.featuredDotActive : styles.featuredDotInactive]}></View>
            <View style={[styles.featuredDot, currentIndex2 == 4 ? styles.featuredDotActive : styles.featuredDotInactive]}></View>
          </View>

          <Text style={styles.stockCardTitle}>TODAYS LOSERS</Text>
          <ViewPagerAndroid style={styles.stockCardContainer} initialPage={0} pageMargin={15} onPageSelected={this.switchFeatured}>
            {this.renderCards()}
          </ViewPagerAndroid>

          <View style={{ alignSelf: 'flex-end', flexDirection: 'row', marginRight: '3%', marginTop: 10 }}>
            <View style={[styles.featuredDot, currentIndex == 0 ? styles.featuredDotActive : styles.featuredDotInactive]}></View>
            <View style={[styles.featuredDot, currentIndex == 1 ? styles.featuredDotActive : styles.featuredDotInactive]}></View>
            <View style={[styles.featuredDot, currentIndex == 2 ? styles.featuredDotActive : styles.featuredDotInactive]}></View>
            <View style={[styles.featuredDot, currentIndex == 3 ? styles.featuredDotActive : styles.featuredDotInactive]}></View>
            <View style={[styles.featuredDot, currentIndex == 4 ? styles.featuredDotActive : styles.featuredDotInactive]}></View>
          </View>

          <View style={{ flex: 1, backgroundColor: colors.secondary, marginTop: 15 }}>
            <Text style={styles.subheading}>Industries</Text>
            <IndustryContainer industryOne={'TECHNOLOGY'} industryTwo={'ENVIRONMENT'} />
            <IndustryContainer industryOne={'HEALTHCARE'} industryTwo={'FINANCE'} />
            <IndustryContainer industryOne={'DAVID'} industryTwo={'SUX'} />
            <IndustryContainer industryOne={'DIX'} industryTwo={'HEHE'} />
            <View style={styles.footer}></View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.authUser.id
  // userID: state.userID,
})

export default connect(mapStateToProps)(DiscoverStockScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  foreground: {
    flex: 1,
    opacity: 1,
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
  subheading: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'normal',
    marginTop: '3%',
    color: colors.main,
    marginLeft: '3%',
    marginBottom: '1.5%',
  },
  stockCardContainer: {
    height: height * 0.325,
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  stockCardTitle: {
    fontSize: 21,
    marginLeft: '4%',
    marginTop: 15,
    fontWeight: 'bold',
    color: '#000000'
  },
  stockCard: {
    position: 'absolute',
    height: height * 0.325,
    width: '100%',
    backgroundColor: 'white',
    // borderWidth: 1,
    borderRadius: 12,
    // borderColor: '#ddd',
    // borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 4,
    marginTop: 5,
  },
  industryContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginLeft: '3%',
    marginRight: '3%',
  },
  industryCard: {
    flex: 1,
    height: height * 0.15,
    width: null,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 4,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  industryCardLeft: {
    marginRight: 5
  },
  industryCardRight: {
    marginLeft: 5
  },
  industryText: {
    fontSize: 19,
  },
  footer: {
    height: 20
  },
  featuredDot: {
    width: 8,
    height: 8,
    marginRight: 5,
    borderRadius: 20
  },
  featuredDotActive: {
    backgroundColor: colors.text
  },
  featuredDotInactive: {
    backgroundColor: '#C4C4C4'
  }
});