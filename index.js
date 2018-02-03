import { Navigation } from 'react-native-navigation';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { registerScreens } from './screens';

registerScreens(store, Provider);
Navigation.startSingleScreenApp({
    screen: {
        screen: 'rana'
    }
});
