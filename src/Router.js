import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SelectedForm from './Pages/SelectedForm';
import ApplicationForm from './Forms/ApplicationForm';
import PastFormPage from './Pages/PastFormPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home(){  // Tab içinde Stack olusturmak icin bu kısımı olusturduk.
  return(
    <Tab.Navigator
        screenOptions={({route}) => ({
          headerStyle: {backgroundColor: '#2D956A'},
          headerTintColor: '#fff',
          headerTitleAlign: 'center',

          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'PastFormPage'){
              iconName = focused ? 'home-circle' : 'home-circle-outline';
            }else if(route.name === 'SelectedForm'){
              iconName = focused ? 'form-select' : 'form-select';
            }else if(route.name === 'HomePage'){
              iconName = focused ? 'folder-zip' : 'folder-zip-outline';
            }

            return <MaterialIcon name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#2D956A',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="PastFormPage" component={PastFormPage} />
        <Tab.Screen name="SelectedForm" component={SelectedForm} />
        <Tab.Screen name="HomePage" component={HomePage} />
      </Tab.Navigator>
  )
}

function Router () {  // Navigation kısmında ilk olarak calısan kısım burası burayı baz alarak calısıyor.
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="ApplicationForm" component={ApplicationForm} options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;