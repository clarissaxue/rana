import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';
import App from '../App';
import HomeScreen from '../components/home';
import LoginScreen from '../components/login';

export function registerScreens() {
    Navigation.registerComponent('rana', () => App);
    Navigation.registerComponent('HomeScreen', () => HomeScreen);
    Navigation.registerComponent('LoginScreen', () => LoginScreen);

    
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'rana'
        }
    });
}
