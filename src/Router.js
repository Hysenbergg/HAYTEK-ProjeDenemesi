import React, { Component } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from "./Pages/LoginPage";
import SelectedForm from "./Pages/SelectedForm";
import LoginForm from "./Forms/LoginForm";
import FormListeleme from "./Pages/FormArsivi";
import ProfilePage from "./Pages/ProfilePage";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stackk = createNativeStackNavigator();

class Stack extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stackk.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stackk.Screen name="LoginPage" component={LoginPage} />
                    <Stackk.Screen name="TabBarScreen" component={TabBarScreen} />
                </Stackk.Navigator>
            </NavigationContainer>
        )
    }
}

function TabBarScreen () {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: 'purple',
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: 'purple',
                    borderTopColor: 'purple',
                },
                tabBarItemStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Tab.Screen
                name="FormStack"
                component={FormStackYapisi}
                options={{
                    tabBarIcon: () => <Icon name="home" size={30} />,
                    tabBarLabel: 'Home',
                }}
            />
            <Tab.Screen
                name="FormListeleme"
                component={FormListeleme}
                options={{
                    tabBarIcon: () => <Icon name="folder-home" size={30} />,
                    tabBarLabel: 'Stats'
                }}
            />
            <Tab.Screen
                name="ProfilePage"
                component={ProfilePage}
                options={{
                    tabBarIcon: () => <Icon name="account" size={30} />,
                    tabBarLabel: 'Settings'
                }}
            />
        </Tab.Navigator>
    )
}

const FormStack = createNativeStackNavigator();

function FormStackYapisi () {
    return (
        <Stackk.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stackk.Screen name="SelectedForm" component={SelectedForm} />
            <Stackk.Screen name="LoginForm" component={LoginForm} />
        </Stackk.Navigator>
    )
}

export default Stack;



