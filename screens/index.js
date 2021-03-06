import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';
import App from '../App';
import { CreateAccountEmailScreen, CreateAccountNameScreen, CreateAccountPasswordScreen } from '../components/createAccount';
import GetStartedScreen from '../components/getStarted';
import VerifyLoginScreen from '../components/verifyLogin';
import HomeScreen from '../components/home';
import LoginScreen from '../components/login';
import ProfileScreen from '../components/profile';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('rana', () => App, store, Provider);
    Navigation.registerComponent('CreateAccountNameScreen', () => CreateAccountNameScreen, store, Provider);
    Navigation.registerComponent('CreateAccountEmailScreen', () => CreateAccountEmailScreen, store, Provider);
    Navigation.registerComponent('GetStartedScreen', () => GetStartedScreen, store, Provider);
    Navigation.registerComponent('HomeScreen', () => HomeScreen, store, Provider);
    Navigation.registerComponent('LoginScreen', () => LoginScreen, store, Provider);
    Navigation.registerComponent('ProfileScreen', () => ProfileScreen, store, Provider);
    Navigation.registerComponent('VerifyLoginScreen', () => VerifyLoginScreen, store, Provider);

}