import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    Text,
    Button,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions
} from "react-native"
import { Container, Content, Form, Item, Input } from 'native-base'
import { connect } from 'react-redux'
import { increaseCounter } from '../../../actions'
import firebase from 'react-native-firebase'
import { storeUserInfo } from '../../../actions'

class SignInScreen extends Component {

    constructor() {
        super()
        this.authRef = firebase.auth()
        this.dbRef = firebase.firestore()
        this.email = 'indigokiwii@gmail.com'
        this.password = 'qweasdzxc'
    }

    signInUser = () => {
        console.log('function started')
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
                console.log('created user')
                firebase.auth().onAuthStateChanged((user) => {
                    console.log('user')
                    if (user) {
                        const userID = user.uid
                        firebase.firestore().collection('users').doc(user.uid).get()
                            .then((doc) => {
                                if (doc.exists) {
                            
                                    const data = doc._data
                                    const user = {
                                        fullName: data.name,
                                        userName: data.username,
                                        userID: userID,
                                        email: data.email,
                                    }

                                    console.log(user)
                                    //need to test the data
                                    //disbatch to redux
                                    this.props.dispatch(storeUserInfo(user))

                                } else {
                                    alert('this user does not exists')
                                }
                            })
                            .then(() => {
                                //navigate to app
                                this.props.navigation.navigate('App') 
                            })
                    } else {
                        // User is signed out.
                        // ...
                    }
                    });
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
                // ...
            });
        
        
    }

    //this.props.navigation.navigate('App')

    render() {
        return (
          <ScrollView style={styles.scrollView} contentContainerStyle={{flex: 1}}>
                <View style={styles.body}>
                    <View style={styles.bodyForeground}>
                        <Text style={styles.title}>{this.props.authUser.name}</Text>
                        <View style={styles.topBodyContainer}>
                            <Text style={styles.topBodyText}>Sign in with:</Text>
                        </View>
                        <TextInput style={styles.textInput} placeholder="Username" placeholderTextColor='#080C2E' />   
                        <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor='#080C2E' /> 
                        <TouchableOpacity style={styles.button} onPress={() => this.signInUser()}>
                            <Text style={styles.btnText}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footer} onPress={() => this.props.navigation.navigate('SignUp')}>
                            <Text style={styles.footerText}>Don't have an account? <Text style={styles.footerTextAction}>Sign up!</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
          </ScrollView>
          
        );
    }
}

const mapStateToProps = state => ({
    authUser: state.authUser
})

export default connect(mapStateToProps)(SignInScreen);

const styles = StyleSheet.create({
    scrollView: {
        //pretty sure i dont need this
        flex: 1,
    },
    title: {
        fontSize: 65,
        color: '#080C2E',
        textAlign: 'center'
    },
    body: {
        // flex: 4,
        //300
        flex: 1,
        // height: '50%',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    bodyForeground: {
        paddingHorizontal: 30
    },
    topBodyContainer: {
        alignItems: 'center',
        marginBottom: 12
    },
    topBodyText: {
        color: '#080C2E',
        marginTop: 25
    },
    textInput: {
        borderColor: '#080C2E',
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 5,
        color: '#080C2E',
        paddingLeft: 18,
        height: 45,
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#080C2E',
        borderRadius: 6,
        padding: 12,
        height: 45
    },
    btnText: {
        color: 'white'
    },
    footer: {
        marginTop: 20,
        alignItems: 'center',
        borderTopWidth: 1,
        padding: 12,
        height: 45
    },
    footerText: {
        color: '#080C2E'
    },
    footerTextAction: {
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});