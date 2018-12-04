import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
} from "react-native";
import colors from "../assets/colors/theme";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
var industryOne = '';

const IndustryContainer = (props) => (
    <View style={styles.industryContainer}>
        <View style={[styles.industryCard, styles.industryCardLeft]}>
            <Text style={styles.industryText}>{props.industryOne}</Text>
        </View>
        <View style={[styles.industryCard, styles.industryCardRight]}>
            <Text style={styles.industryText}>{props.industryTwo}</Text>
        </View>
    </View>
    )
export default IndustryContainer;

const styles = StyleSheet.create({
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
        fontSize: 16,
        color: colors.text,
    },
});