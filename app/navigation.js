import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
// import Icon from 'react-native-vector-icons/Ionicons';

import LoginScreen from './modules/login-screen';
import HomeScreen from './modules/home-screen';
import styles from './styles';

const HomeStack = StackNavigator({
  Home: { screen: HomeScreen }
});

export const Main = StackNavigator({
  Login: { screen: LoginScreen },
  Home: {
    screen: HomeStack,
    navigationOptions: { header: null }
  }
});
