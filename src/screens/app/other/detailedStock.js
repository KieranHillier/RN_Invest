import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native";
import { AreaChart, Grid, LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import colors from "../../../assets/colors/theme";
import { withNavigation } from 'react-navigation'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


class DetailedStockScreen extends Component {

    constructor() {
        super()
        this.state = {
            activeTime: 1,
            stock: {},
        }
    }
    render() {

        const { navigation } = this.props
        const stock = navigation.getParam('stock', 'undefined')

        return (
            <View style={styles.container}>
                <View style={styles.topNumbers}>
                    <Text style={{fontSize:16, color: colors.text}}>{`${stock.market} `}<Text style={{fontSize: 21, fontWeight: 'bold', color: colors.text}}>{stock.companyName}</Text></Text>
                    <Text style={{fontSize: 56, lineHeight: 70, color: colors.text}}>{`$${stock.price}`}</Text>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', width: '100%', paddingHorizontal: 8}}>
                        <Text style={{color: colors.text}}>As of: <Text style={{fontWeight: 'bold', color: colors.text}}>{`${stock.time}`}</Text></Text>
                        <Text style={{color: '#61D943', fontSize: 21, lineHeight: 20}}>{`${stock.difference} (${stock.differencePercentage}%)`}</Text>
                    </View>
                </View>
                <View style={styles.middleGraph}>
                    <LineChart
                    style={{ height: '100%' }}
                    data={ stock.data }
                    svg={{ stroke: '#61D943', strokeWidth: 3 }}
                    contentInset={{ top: 20, bottom: 20 }}
                    >
                    </LineChart>
                </View>
                <View style={styles.bottomNumbers}>
                    <View style={{flexDirection: 'row', marginTop: 12}}>
                        <TouchableOpacity onPress={() => this.setState({activeTime: 0})} style={styles.timeBtn}>
                            <Text style={[styles.timeBtnText, this.state.activeTime == 0 ? styles.timeBtnTextActive : '']}>1D</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({activeTime: 1})} style={styles.timeBtn}>
                            <Text style={[styles.timeBtnText, this.state.activeTime == 1 ? styles.timeBtnTextActive : '']}>1W</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({activeTime: 2})} style={styles.timeBtn}>
                            <Text style={[styles.timeBtnText, this.state.activeTime == 2 ? styles.timeBtnTextActive : '']}>1M</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({activeTime: 3})} style={styles.timeBtn}>
                            <Text style={[styles.timeBtnText, this.state.activeTime == 3 ? styles.timeBtnTextActive : '']}>6M</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({activeTime: 4})} style={styles.timeBtn}>
                            <Text style={[styles.timeBtnText, this.state.activeTime == 4 ? styles.timeBtnTextActive : '']}>1Y</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({activeTime: 5})} style={styles.timeBtnLast}>
                            <Text style={[styles.timeBtnText, this.state.activeTime == 5 ? styles.timeBtnTextActive : '']}>ALL</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20, width: width, justifyContent: 'space-between', paddingHorizontal: 15, flex: 1}}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text>OPEN</Text>
                            <Text style={{fontSize: 17, fontWeight:'bold', color: colors.text}}>$1064.13</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text>HIGH</Text>
                            <Text style={{fontSize: 17, fontWeight:'bold', color: colors.text}}>$1064.13</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text>CLOSE</Text>
                            <Text style={{fontSize: 17, fontWeight:'bold', color: colors.text}}>$1064.13</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 15, width: width, justifyContent: 'space-between', paddingHorizontal: 15,}}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={{backgroundColor: '#FFB534', elevation: 2, justifyContent: 'center', alignItems: 'center', width: 80, borderRadius: 8, height: 30}}>
                                <Text style={{color: colors.main, fontWeight: 'bold', fontSize: 15}}>Trade</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#FFB534', elevation: 2, justifyContent: 'center', alignItems: 'center', width: 80, borderRadius: 8, marginLeft: 8, height: 30}}>
                                <Text style={{color: colors.main, fontWeight: 'bold', fontSize: 15}}>Watchlist</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{alignSelf: 'flex-end'}}>OWNED: <Text style={{fontSize: 20, fontWeight: 'bold', color: colors.text}}>$1503</Text></Text>
                    </View>
                    
                </View>
            </View>
        );
    }
}
export default DetailedStockScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    topNumbers: {
        height: height * 0.25,
        width: width * 0.70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleGraph: {
        flex: 1,
        width: width,
        paddingRight: 12,
        paddingLeft: 12
        // backgroundColor: 'green'
    },
    bottomNumbers: {
        height: height * 0.2,
        width: width,
        marginBottom: 20,
        // backgroundColor: 'blue'
    },
    timeBtn: {
        width: '16.6%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1
    },
    timeBtnLast: {
        width: '16.6%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeBtnText: {
        paddingHorizontal: 15, 
        borderRadius: 3
    },
    timeBtnTextActive: {
        backgroundColor: '#FFB534', 
    },
    timeBtnTextInactive: {
        backgroundColor: colors.text, 
    }
});