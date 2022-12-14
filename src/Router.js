import React, { Component } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from "./Pages/LoginPage";
import SelectedForm from "./Pages/SelectedForm";
import LoginForm from "./Forms/LoginForm";
import FormListeleme from "./Pages/FormArsivi";
import ProfilePage from "./Pages/ProfilePage";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

class Stack extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarActiveBackgroundColor: 'purple',
                        tabBarActiveTintColor: 'black',
                        tabBarInactiveTintColor: 'gray',
                        tabBarStyle: {
                            backgroundColor: 'red',
                            borderTopColor: 'yellow',
                        },
                        tabBarItemStyle: {
                            backgroundColor: 'white'
                        }
                    }}
                    >
                    <Tab.Screen
                        name="SelectedForm"
                        component={SelectedForm}
                        options={{
                            tabBarIcon: () => <Icon name="home" size={30} />,
                            tabBarLabel: 'Home',
                        }}
                    />
                    <Tab.Screen
                        name="LoginForm"
                        component={LoginForm}
                        options={{
                            tabBarIcon: () => <Icon name="home-account" size={30} />,
                            tabBarLabel: 'Multi'
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
            </NavigationContainer>
        )
    }
}
/*
const myStack = createStackNavigator({
    LoginPage : {
        screen: LoginPage,
        navigationOptions: {
            headerShown: false,
        }
    },
    SelectedForm : {
        screen: SelectedForm,
        navigationOptions: {
            headerShown: false,
        }
    },
    LoginForm : {
        screen: LoginForm,
        navigationOptions: {
            title: 'Soru Çizelgesi 005 Giriş'
        }
    },
    FormListeleme : {
        screen: FormListeleme,
        navigationOptions: {
            title: 'Geçmiş Soru Çizelgeleri'
        }
    },
    ProfilePage : {
        screen: ProfilePage,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
    initialRouteName: 'LoginPage',
    
});

const AppContainer = createAppContainer(myStack);*/

export default Stack;



