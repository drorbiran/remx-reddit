import {Navigation} from 'react-native-navigation';

import PostsList from './PostsList';
import TopicList from './TopicList';

export function registerScreens(store) {
    Navigation.registerComponent('remxReddit.PostsList', () => PostsList);
    Navigation.registerComponent('remxReddit.TopicList', () => TopicList);
}