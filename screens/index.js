import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';
import App from '../App';
import HomeScreen from '../components/home';
import ProfileScreen from '../components/profile';
import LoginScreen from '../components/login';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('rana', () => App, store, Provider);
    Navigation.registerComponent('HomeScreen', () => HomeScreen, store, Provider);
    Navigation.registerComponent('LoginScreen', () => LoginScreen, store, Provider);
    Navigation.registerComponent('ProfileScreen', () => ProfileScreen, store, Provider);

}