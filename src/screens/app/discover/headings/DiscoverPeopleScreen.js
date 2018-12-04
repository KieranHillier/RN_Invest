import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    ViewPagerAndroid
} from "react-native";
import colors from "../../../../assets/colors/theme";
import { Row } from "native-base";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class DiscoverPeopleScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <ScrollView horizontal={true} pagingEnable={true} contentContainerStyle={{flexDirection: 'row', backgroundColor: 'grey',  }} style={{paddingLeft: width * 0.03, paddingTop: '3%', height: height * 0.30}}>
                    <TouchableOpacity style={styles.profileCard}>
                        <View style={styles.topProfile}>
                            <View style={{flex: 1, backgroundColor: 'orange', borderRadius: 50, margin: 10}}></View>
                            <View style={{width: '50%', backgroundColor: 'orange',}}>
                                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: 23}}>+25.7%</Text>
                                </View>
                                <View style={{flexDirection: 'row', height: '32%', justifyContent: 'space-around'}}>
                                    <Text>200</Text>
                                    <Text>3000</Text>
                                </View> 
                            </View>
                            
                        </View>
                        <View style={styles.centerProfile}>
                            <Text>Kieran Hillier</Text>
                            <Text>Technology</Text>
                        </View>
                        <View style={styles.bottomProfile}>
                            <TouchableOpacity style={{backgroundColor: '#FFB534', elevation: 2, justifyContent: 'center', alignItems: 'center', width: 80, borderRadius: 8, height: 30}}>
                                <Text style={{color: colors.main, fontWeight: 'bold', fontSize: 15}}>PH</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#FFB534', elevation: 2, justifyContent: 'center', alignItems: 'center', width: 80, borderRadius: 8, marginLeft: 8, height: 30}}>
                                <Text style={{color: colors.main, fontWeight: 'bold', fontSize: 15}}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileCard}>
                        <Text>Kieran Hillier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileCard}>
                        <Text>Kieran Hillier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileCard}>
                        <Text>Kieran Hillier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileCard}>
                        <Text>Kieran Hillier</Text>
                    </TouchableOpacity>
                    
                </ScrollView>
                <ScrollView horizontal={true} pagingEnable={true} contentContainerStyle={{flexDirection: 'row', backgroundColor: 'grey',  }} style={{paddingLeft: '3%', paddingTop: '3%', height: height * 0.25}}>
                    <TouchableOpacity style={{backgroundColor: 'pink', width: 125}}>
                        <View style={styles.topProfile}>
                            <View style={{width: 50, height: 50, backgroundColor: 'orange'}}></View>
                        </View>
                        <View style={styles.centerProfile}></View>
                        <View style={styles.bottomProfile}></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'pink',  width: 125}}>
                        <Text>Kieran Hillier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'pink', width: 125}}>
                        <Text>Kieran Hillier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'pink', width: 125}}>
                        <Text>Kieran Hillier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'pink',  width: 125}}>
                        <Text>Kieran Hillier</Text>
                    </TouchableOpacity>
                </ScrollView>
                <ScrollView horizontal={true} pagingEnable={true} contentContainerStyle={{flexDirection: 'row', backgroundColor: 'grey',  }} style={{paddingLeft: '3%', paddingTop: '3%', height: height * 0.25}}>
                    <TouchableOpacity style={{backgroundColor: 'pink', width: 125}}>
                        <Text>Kieran Hillier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'pink',  width: 125}}>
                        <Text>Kieran Hillier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'pink', width: 125}}>
                        <Text>Kieran Hillier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'pink', width: 125}}>
                        <Text>Kieran Hillier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'pink',  width: 125}}>
                        <Text>Kieran Hillier</Text>
                    </TouchableOpacity>
                </ScrollView>
                

                <ViewPagerAndroid style={{flex: 1, height: height * 0.35, backgroundColor: 'yellow'}} initialPage={0}>
                    <View style={{backgroundColor: 'pink',  padding: 20}} key="1">
                        <Text>Kieran Hillier</Text>
                    </View>
                    <View style={{backgroundColor: 'pink', height: 125, width: 250}} key="2">
                        <Text>Kieran Hillier</Text>
                    </View>
                    <View style={{backgroundColor: 'pink', height: 125, width: 250}} key="3">
                        <Text>Kieran Hillier</Text>
                    </View>
                
                </ViewPagerAndroid>

            
                <View style={{flex: 1,  backgroundColor: 'red'}}>
                <View style={{backgroundColor: 'pink', height: height * 0.2, width: 250}} key="3">
                        <Text>Kieran Hillier</Text>
                    </View></View>
            
                <View style={{height: height * 0.1,  backgroundColor: 'green'}}></View>
            </ScrollView>
        );
    }
}
export default DiscoverPeopleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    profileCard: {
        backgroundColor: 'pink', 
        width: 180, 
        marginRight: width * 0.03, 
        borderRadius: 12,
       
    },
    topProfile: {
        flex: 4,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        // alignItems: 'center',
    },
    centerProfile: {
        flex: 2,
        backgroundColor: 'red'
    },
    bottomProfile: {
        flex: 2,
        backgroundColor: 'purple',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});