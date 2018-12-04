import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine, VictoryAxis, VictoryVoronoiContainer, VictoryCursorContainer, VictoryScatter } from 'victory-native'

class SimpleStockChart extends Component {

  render() {

      return (
        <View style={styles.container}>
          <VictoryChart height={this.props.height}>
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
          </VictoryChart>
        </View>
      );
  }
}
export default SimpleStockChart;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
  }
});