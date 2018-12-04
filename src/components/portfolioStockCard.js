import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { AreaChart, Grid, LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

const PortfolioStockCard = (props) => (
    <View style={styles.portfolioCard}>
        <View style={styles.cardLeft}>
            <Image style={styles.cardLogo} source={require('../assets/images/google.png')}/>
            <View style={styles.logoDetails}>
                <Text>GOOGL</Text>
                <Text>$1042</Text>
            </View>    
        </View>
        <View style={styles.cardChart}>
            <LineChart
                style={{ height: '100%' }}
                data={ props.data }
                svg={{ stroke: 'rgb(134, 65, 244)', strokeWidth: 3 }}
                contentInset={{ top: 20, bottom: 20 }}
                >
            </LineChart>
        </View>
        <View style={styles.cardStats}>
            <Text>$0.92</Text>
            <Text>0.077%</Text>
        </View>
    </View>
    )
export default PortfolioStockCard;

const styles = StyleSheet.create({
    portfolioCard: {
        marginBottom: 5,
        height: 75,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    cardLeft: {
        width: '36%',
        height: '100%',
        // backgroundColor: 'grey',
        justifyContent: 'center',
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardLogo: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    logoDetails: {
        paddingLeft: 15,
        justifyContent: 'center'
    },
    cardChart: {
        width: '47%',
        height: '100%',
        // backgroundColor: 'green',
        paddingHorizontal: 15
    },
    cardStats: {
        width: '17%',
        height: '100%',
        // backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '900'
    }
});