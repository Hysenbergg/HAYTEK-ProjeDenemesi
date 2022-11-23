import React from "react";
import { SafeAreaView, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SelectedForm from './Pages/SelectedForm';
import ApplicationForm from './Forms/ApplicationForm';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Router () {
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerStyle: {backgroundColor: '#2D956A'},
          headerTintColor: '#fff',
          headerTitleAlign: 'center',

          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'ApplicationForm'){
              iconName = focused ? 'home-circle' : 'home-circle-outline';
            }else if(route.name === 'SelectedForm'){
              iconName = focused ? 'form-select' : 'form-select';
            }else if(route.name === 'LoginPage'){
              iconName = focused ? 'folder-zip' : 'folder-zip-outline';
            }

            return <MaterialIcon name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#2D956A',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="ApplicationForm" component={ApplicationForm} />
        <Tab.Screen name="SelectedForm" component={SelectedForm} />
        <Tab.Screen name="LoginPage" component={LoginPage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router;