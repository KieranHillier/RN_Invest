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
    TouchableOpacity
} from "react-native";
import { Row } from "native-base";
import colors from "../../../../assets/colors/theme";
import { AreaChart, Grid, LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import FeaturedStockCard from '../../../../components/featuredStockCard'
import IndustryContainer from '../../../../components/industryContainer'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const stockCards = [
    {id:0, stockName: "GOOGL"},
    {id:1, stockName: "TWTR"},
    {id:2, stockName: "MEME"},
    {id:3, stockName: "XD"},
    {id:4, stockName: "6969"},
]

class DiscoverStockScreen extends Component {

    constructor(){
        super()

        this.position = new Animated.ValueXY()
        this.state = {
            currentIdex: 0
        }

        this.rotate = this.position.x.interpolate({
            inputRange: [-width / 2, 0, width / 2],
            outputRange: ['-10deg', '0deg', '10deg'],
            extrapolate: 'clamp'
        })

        this.rotateAndTranslate = {
            transform:[{
                rotate: this.rotate
            }, ...this.position.getTranslateTransform() ]
        }

        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-width / 2, 0, width / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        })

        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-width / 2, 0, width / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: 'clamp'
        })
    }

    componentWillMount() {
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder:(evt, gestureState) => true,
            onPanResponderMove:(evt, gestureState) => {
                this.position.setValue({x: gestureState.dx, y: gestureState.dy})
            },
            onPanResponderRelease:(evt, gestureState) => {
                if (this.state.currentIdex < 4) {
                    if (gestureState.dx > 180) {
                        Animated.spring(this.position, {
                            toValue: {x: width + 100, y: gestureState.dy}
                        }).start(() => {
                            this.setState({ currentIdex: this.state.currentIdex + 1}, () => {
                                this.position.setValue({x:0, y:0})
                            })
                        })
                    } else if (gestureState.dx < -180) {
                        Animated.spring(this.position, {
                            toValue: {x: -width - 100, y: gestureState.dy}
                        }).start(() => {
                            this.setState({ currentIdex: this.state.currentIdex + 1}, () => {
                                this.position.setValue({x:0, y:0})
                            })
                        })
                    } else {
                        Animated.spring(this.position, {
                            toValue: {x: 0, y: 0},
                            friction: 4
                        }).start()
                    }
                } else {
                    Animated.spring(this.position, {
                        toValue: {x: 0, y: 0},
                        friction: 4
                    }).start()
                }
               
            }
        })
    }

    detailsPage = () => {
        this.props.navigation.navigate('People')
    }

    renderStocks = () => {
        return stockCards.map((item, i) => {

            if (i < this.state.currentIdex) {
                return null
            } else if (i == this.state.currentIdex) {
                
                return(
                    <Animated.View {...this.PanResponder.panHandlers} key={item.id} style={[this.rotateAndTranslate, styles.stockCard]}>
                        <FeaturedStockCard name={item.stockName}/>
                    </Animated.View>
                )
                
                
            } else {
                return(
                    <Animated.View key={item.id} style={[{opacity: this.nextCardOpacity, transform: [{scale: this.nextCardScale}]}, styles.stockCard]}>
                        <FeaturedStockCard />
                    </Animated.View>
                )
            }


            // return(
            //     <Animated.View {...this.PanResponder.panHandlers} key={item.id} style={[{transform:this.position.getTranslateTransform()}, styles.stockCard]}>
            //         <Text>{item.stockName}</Text>
            //     </Animated.View>
            // )

            
        }).reverse()
    }

    renderCards = () => {
        return stockCards.map((item, i) => {
                
                return(
                    <Animated.View key={item.id} style={styles.stockCard}>
                        <FeaturedStockCard name={item.stockName} />
                    </Animated.View>
                )
            
        }).reverse()
    }


    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        return (
            <View style={styles.container}>
                <ScrollView style={styles.foreground}>
                    <View style={styles.stockCardContainer}>
                        {this.renderStocks()}
                    </View>
                    <View style={{flex: 1, backgroundColor: colors.secondary, marginTop: 40}}>
                        <Text style={styles.subheading}>Industries</Text>
                        <View style={styles.industryContainer}>
                            <TouchableOpacity style={[styles.industryCard, styles.industryCardLeft]}>
                                <Text style={styles.industryText}>TING</Text>
                            </TouchableOpacity>
                            <View style={[styles.industryCard, styles.industryCardRight]}>
                                <Text style={styles.industryText}>TECH</Text>
                            </View>
                        </View>
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
export default DiscoverStockScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        
    },
    foreground: {
        flex: 1,
        opacity: 1,
      
        
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
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
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
});