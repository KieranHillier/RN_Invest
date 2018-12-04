import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class DiscoverGroupsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>DiscoverGroupsScreen</Text>
            </View>
        );
    }
}
export default DiscoverGroupsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});