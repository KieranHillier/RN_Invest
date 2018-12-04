import { createStackNavigator } from 'react-navigation'
import SignInScreen from '../screens/auth/signin/SignInScreen'
import SignUpScreen from '../screens/auth/signup/SignUpScreen'

const SignIn = {
    screen: SignInScreen,
    navigationOptions: {
        header: null
    }
}

const SignUp = {
    screen: SignUpScreen,
    navigationOptions: {
        title: 'Sign In'
    }
}

const AuthStackNavigator = createStackNavigator({
    SignIn,
    SignUp
})

export default AuthStackNavigator