import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine, VictoryAxis, VictoryVoronoiContainer, VictoryCursorContainer, VictoryScatter } from 'victory-native'

class StockChart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      x: null,
      activePoint: null
    }
  }

  render() {


    const { activePoint, x } = this.state
    const point = activePoint ? <VictoryScatter data={[activePoint]} size={7} style={{ data: { fill: "#61D943", size: 1000 } }} /> : null;      
    console.log(this.props.data)
      return (
        <View style={styles.container}>
          <Text>{x}</Text>
          <VictoryChart
            containerComponent={
              <VictoryVoronoiContainer
                onActivated={(points) => this.setState({ x: points[0].y, activePoint: points[0] })}
              />
            }
          >
            <VictoryAxis
              dependentAxis
              tickValues={[100, 101.5, 103]}
              tickFormat={(t) => Math.round(t)}
              style={{
                axis: { stroke: 'rgba(0, 0, 0, 0)' },
                grid: { stroke: (t) => t == 105.5 ? 'red' : 'rgba(210, 201, 201, 0.4)' },
              }}
            />
            
            <VictoryLine
              data={this.props.data}
              interpolation='linear'
              style={{
                data: { stroke: '#61D943', strokeWidth: 3 }
              }}
            />
            {point}
          </VictoryChart>
        </View>
      );
  }
}
export default StockChart;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
  }
});