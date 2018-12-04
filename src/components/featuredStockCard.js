import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
  Text
} from "react-native";
import { AreaChart, Grid, LineChart, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Circle, G, Line, Rect } from 'react-native-svg'
import colors from "../assets/colors/theme";
import { withNavigation } from 'react-navigation'
import firebase from 'react-native-firebase';
import { connect } from 'react-redux'

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const HorizontalLine = (({ y }) => (
  <G>
    <Line
    key={1}
    x1={'0%'}
    x2={'100%'}
    y1={y(0)}
    y2={y(0)}
    stroke={'lightgrey'}
    strokeWidth={1.5}
    />
    <Line
    key={2}
    x1={'0%'}
    x2={'100%'}
    y1={y(50)}
    y2={y(50)}
    stroke={'lightgrey'}
    strokeWidth={1.5}
    />
    <Line
    key={3}
    x1={'0%'}
    x2={'100%'}
    y1={y(-50)}
    y2={y(-50)}
    stroke={'lightgrey'}
    strokeWidth={1.5}
    />
  </G>
))

const Tooltip = ({ x, y }) => (
  <G
    x={x(5) - (75 / 2)}
    key={'tooltip'}
    onPress={() => console.log('tooltip clicked')}
  >
    <G y={50}>
      <Rect
        height={40}
        width={75}
        stroke={'grey'}
        fill={'white'}
        ry={10}
        rx={10}
      />
      <Text
        x={75 / 2}
        dy={20}
        alignmentBaseline={'middle'}
        textAnchor={'middle'}
        stroke={'rgb(134, 65, 244)'}
      >
        {`${data[5]}ºC`}
      </Text>
    </G>
    <G x={75 / 2}>
      <Line
        y1={50 + 40}
        y2={y(data[5])}
        stroke={'grey'}
        strokeWidth={2}
      />
      <Circle
        cy={y(data[5])}
        r={6}
        stroke={'rgb(134, 65, 244)'}
        strokeWidth={2}
        fill={'white'}
      />
    </G>
  </G>
)

//NEED TO CHANGE THIS TO BECOME A COMPONENT WITH STATE
// const watchlist = (stockName) => {
//   console.log(`adding ${stockName} to watchlist`)
//   // const currentID = this.props.authUser
//   // firebase.firestore().collection('users').doc(currentID).update({
//   //   watchlist: firebase.firestore.FieldValue.arrayUnion(stockName)
//   // })
// }

// <YAxis
  //       data={ data }
  //       contentInset={{ top: 5, bottom: 5 }}
  //       svg={{
  //           fill: 'grey',
  //           fontSize: 10,
  //       }}
  //       numberOfTicks={ 3 }
      
  //     />
  //     <LineChart
  //       style={{ flex: 1, marginLeft: 8 }}        
  //       data={props.data}
  //       svg={{ stroke: '#61D943', strokeWidth: 3 }}
  //       contentInset={{ top: 20, bottom: 20 }}
  //     >
  //       <HorizontalLine/>
  //       <Grid/>
  //     </LineChart>

class FeaturedStockCard extends Component {

  constructor(props){
    super(props)
    this.ref = firebase.firestore()
    this.state = {
      watchlistPressed: 'Watchlist'
    }
  }

  watchlist = (stock) => {

    const currentID = this.props.authUser

    if (this.state.watchlistPressed === 'Watchlisted') {
      this.setState({ watchlistPressed: 'Watchlist'})
      this.ref.collection('users').doc(currentID).update({
        watchlist: firebase.firestore.FieldValue.arrayRemove(stock)
      })
    } else {
      this.setState({ watchlistPressed: 'Watchlisted'})
      this.ref.collection('users').doc(currentID).update({
        watchlist: firebase.firestore.FieldValue.arrayUnion(stock)
      })
    }

    console.log(this.state.watchlistPressed)
    
  }

  render() {

    return (
      <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Details', {
        stock: this.props.stock
      })} style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 39, color: colors.text, fontFamily: 'Roboto' }}>{this.props.stock.stockName}</Text>
          <Text style={{ fontSize: 39, color: colors.text, }}>{`$${this.props.stock.price}`}</Text>
    
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 14 }}>
          <Text style={{ fontSize: 12, fontWeight: '500', color: colors.text, lineHeight: 12, fontFamily: 'Roboto' }}>{`${this.props.stock.market} `}<Text style={{ fontSize: 12, fontWeight: '200' }}>{this.props.stock.companyName}</Text></Text>
          <Text style={{ fontSize: 17, fontWeight: '500', color: '#61D943', lineHeight: 18 }}>{`${this.props.stock.difference} (${this.props.stock.differencePercentage}%)`}</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 11, flexDirection:'row'}}>
          <LineChart
            style={{ flex: 1, marginLeft: 8 }}        
            data={this.props.stock.data}
            svg={{ stroke: '#61D943', strokeWidth: 3 }}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <HorizontalLine/>
          </LineChart>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 11, paddingBottom: 5 }}>
          <Text style={{ fontSize: 28, fontWeight: '500', color: colors.text }}>126 <Text style={{ fontSize: 12, fontWeight: '200' }}>last week</Text></Text>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <TouchableOpacity style={{ backgroundColor: '#FFB534', elevation: 2, justifyContent: 'center', alignItems: 'center', width: 80, borderRadius: 8, height: 30 }}>
              <Text style={{ color: colors.main, fontWeight: 'bold', fontSize: 15 }}>PH</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.watchlist(this.props.stock.stockName)} style={[styles.watchlistButton, this.state.watchlistPressed === 'Watchlisted' ? styles.pressed : styles.unPressed]}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>{this.state.watchlistPressed}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = state => ({
  authUser: state.authUser.id
  // userID: state.userID,
})

export default connect(mapStateToProps)(withNavigation(FeaturedStockCard));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
  watchlistButton: { 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 100, 
    borderRadius: 8, 
    marginLeft: 8, 
    height: 33
  },
  pressed: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    elevation: 0,
  },
  unPressed: {
    backgroundColor: '#FFB534',
    elevation: 2,
  },
});