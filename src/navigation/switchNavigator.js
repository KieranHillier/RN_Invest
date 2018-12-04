import {createSwitchNavigator} from 'react-navigation'
import AuthLoadingScreen from '../screens/authLoading/AuthLoadingScreen'
import AuthStackNavigator from './authStackNavigator'
import AppDrawerNavigator from './appDrawerNavigator'

const SwitchNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator, 
    App: AppDrawerNavigator
})

export default SwitchNavigator