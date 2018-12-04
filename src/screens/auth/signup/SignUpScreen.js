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
    Dimensions,
} from "react-native"
import firebase from 'react-native-firebase'
import { connect } from 'react-redux'
import { changeName, storeUserInfo } from '../../../actions'


class SignUpScreen extends Component {

    constructor() {
        super()
        this.ref = firebase.auth()
        this.db = firebase.firestore()
        this.password = 'qweasdzxc'
        this.user = {
            email: 'indigokiwii@gmail.com',
            fullName: 'kieran hillier',
            userName: 'kieran_hillier',
            userID: '',
        }
    }

    // track all information from TextInput's
    EmailChange = (email) => this.user.email = email;
    FullNameChange = (fullName) => this.user.fullName = fullName;
    UserNameChange = (userName) => this.user.userName = userName;
    PasswordChange = (password) => this.password = password;

    // create a new Auth() user, add them to firestore, update redux state, navigate to app landing page
    signUpUser = () => {
        console.log('start-signup')
        this.ref.createUserAndRetrieveDataWithEmailAndPassword(this.user.email, this.password)
            .then((user) => {
                console.log(user.user._user)

                // add new user info to 'users' collection
                let newUID = user.user._user.uid
                this.db.collection('users').doc(newUID).set({
                    name: this.user.fullName,
                    username: this.user.userName,
                    email: this.user.email,
                    activity: {
                        test: "test"
                    },
                    watchlist: [],
                    followers: [],

                })

                // add new user uid & username to 'userList' collection (used for searching users)
                this.db.collection('userList').doc(this.user.userName).set({
                    uid: newUID
                })

                this.user.userID = newUID
            })
            .then(() => {
                // dispatch user info to redux 
                this.props.dispatch(storeUserInfo(this.user))
            })
            .then(() => {
                // navigate to BottomTabNavigator
                this.props.navigation.navigate('App') 
            })
            .catch((error) => {alert(error)})
    }

    // test function to check redux store functionality
    changeTheName = () => {
        console.log(this.props.authUser)
        this.props.dispatch(changeName())
    }

    render() {
        return (
              
                  <View style={styles.body}>   
                    <ScrollView style={styles.scroll}>          
                      <View style={styles.bodyForeground}>
                          <Text style={styles.title}>{this.props.userID}</Text>
                          <View style={styles.topBodyContainer}>
                              <Text style={styles.topBodyText}>Sign up ASd with:</Text>
                          </View>
                          <TextInput style={styles.textInput} placeholder="Username" placeholderTextColor='#080C2E' onChangeText={this.UserNameChange}/>   
                          <TextInput style={styles.textInput} placeholder="Name" placeholderTextColor='#080C2E' onChangeText={this.FullNameChange}/> 
                          <TextInput style={styles.textInput} placeholder="Email" placeholderTextColor='#080C2E' onChangeText={this.EmailChange}/> 
                          <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor='#080C2E' onChangeText={this.PasswordChange}/> 
                          <TouchableOpacity style={styles.button} onPress={this.signUpUser}>
                              <Text style={styles.btnText}>Sign Up</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.button} onPress={() => this.changeTheName()}>
                              <Text style={styles.btnText}>{this.props.user}</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.footer} onPress={() => this.props.navigation.navigate('SignIn')}>
                              <Text style={styles.footerText}>Already have an account? <Text style={styles.footerTextAction}>Sign in!</Text></Text>
                          </TouchableOpacity>
                      </View>
                      </ScrollView>
                  </View>
           
            
          );
    }
}

const mapStateToProps = state => ({
    userID: state.userID,
    authUser: state.authUser
})

// const mapDispatchToProps = dispatch => ({
//     changeName: () => dispatch(changeName())
// })

export default connect(mapStateToProps)(SignUpScreen);

const styles = StyleSheet.create({
    scroll: {
        
        width:null,
        height: null,
        backgroundColor: 'white',
        // justifyContent: 'center',
    },
    title: {
        fontSize: 65,
        color: '#080C2E',
        textAlign: 'center'
    },
    body: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    bodyForeground: {
        marginTop: 20,
        paddingHorizontal: 30,
        justifyContent: 'center',
        // alignItems: 'center'
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