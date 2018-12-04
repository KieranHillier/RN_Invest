import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine, VictoryAxis, VictoryVoronoiContainer, VictoryCursorContainer, VictoryScatter } from 'victory-native'
import StockChart from '../../../components/stockChart'
import SimpleStockChart from "../../../components/simpleStockChart";

class DashBoardScreen extends Component {

  constructor() {
    super()

    this.state = {
      featuredStocks: null,
      x: 1,
      activePoint: null
    }
    this.ref = firebase.firestore().collection('stocks')
  }

  componentWillMount() {
    var arr = []
    var i = 0
    while(arr.length < 100){
        i += 1
        var r = (Math.random() * 3) + 100;
        var newPosition = {
            x: i,
            y: r
        }
        arr.push(newPosition);
    }
    this.setState({
      featuredStocks: arr
    })
    console.log(arr)
    // this.ref.doc('MSFT').get().then((doc) => {
    //   if (doc.exists) {
    //     // console.log(doc.data().closingPrice)

    //     let featuredStocks = doc.data().closingPrice
    //     let dataArray = []
    //     featuredStocks.forEach((element) => {
    //       newItem = {
    //         closingPrice: Number(element.closingPrice),
    //         timeStamp: element.timeStamp
    //       }
    //       dataArray.push(newItem)
    //     });

        

    //     this.setState({
    //       featuredStocks: dataArray
    //     })
    //     // console.log(this.state.featuredStocks)

    //   } else {
    //     console.log('No data');
    //   }
    // })
    // .catch((err) => {
    //   console.log(err)
    // })

    


  }

  render() {

    const { featuredStocks } = this.state

    const dataChart = featuredStocks ? (
        <View>
          <StockChart data={featuredStocks} />
          <SimpleStockChart data={featuredStocks} />
          <Text>{this.props.authUser}</Text>
        </View>
        
      
    ) : null;

    return (
      <View style={styles.container}>
        {dataChart}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.authUser.email
  // userID: state.userID,
})

export default connect(mapStateToProps)(DashBoardScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});