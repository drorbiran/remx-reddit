import {Navigation} from 'react-native-navigation';

import Screen1 from './Screen1';
import TopicList from './TopicList';

export function registerScreens(store) {
    Navigation.registerComponent('bootstrap.Screen1', () => Screen1);
    Navigation.registerComponent('bootstrap.TopicList', () => TopicList);
}