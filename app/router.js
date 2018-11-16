import React, {Component} from 'react'
import {Dimensions, Platform} from 'react-native'
import {StackNavigator, createStackNavigator, createBottomTabNavigator, withNavigation} from 'react-navigation'

import todo from './screens/todo';
import done from './screens/done';
import archive from './screens/archive';
import Note from './Note'

let screens=Dimensions.get('window');

export const Tabs= createBottomTabNavigator({
    'todo': {
        screen : todo,
        navigationOptions :{
            tabBarLabel : 'To do'
        },
    },
    'done': {
        screen : done,
        navigationOptions :{
            tabBarLabel : 'Done'
        },
    },
    'archive': {
        screen : archive,
        navigationOptions :{
            tabBarLabel : 'Archive'
        },
    }
});

export const createRootNavigator = () => {
    return StackNavigator(
        {
            Tabs: {
                screen : Tabs,
                navigationOptions: ({navigation}) => ({
                    gesturesEnabled: false
                })
            }
        },
        {
            headerMode: "none",
            mode: "modal"
        }
    );
};