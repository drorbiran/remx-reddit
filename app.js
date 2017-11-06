import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {registerScreens} from './src/screens';
registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'bootstrap.TopicList',
    title: 'remx Reddit'
  }
});
