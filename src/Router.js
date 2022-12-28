import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from './Pages/LoginPage';
import SelectedForm from './Pages/SelectedForm';
import LoginForm from './Forms/LoginForm';
import FormListeleme from './Pages/FormArsivi';
import ProfilePage from './Pages/ProfilePage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import Loading from './Components/Loading';

const Stackk = createNativeStackNavigator();

const Stack = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stackk.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stackk.Screen name="LoginPage" component={LoginPage} />
        </Stackk.Navigator>
      ) : (
        <Stackk.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stackk.Screen name="TabBarScreen" component={TabBarScreen} />
        </Stackk.Navigator>
      )}
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

function TabBarScreen() {
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
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name="FormStack"
        component={FormStackYapisi}
        options={{
          tabBarIcon: () => <Icon name="form-select" size={30} />,
          tabBarLabel: 'Formlar',
        }}
      />
      <Tab.Screen
        name="FormListeleme"
        component={FormListeleme}
        options={{
          tabBarIcon: () => <Icon name="folder" size={30} />,
          tabBarLabel: 'Arşiv',
        }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          tabBarIcon: () => <Icon name="account" size={30} />,
          tabBarLabel: 'Profil',
        }}
      />
    </Tab.Navigator>
  );
};

// Bu ikinci stack değişkenini aynı stack üzerinden farklı stack yapısı yaptığımızda hata alıyorduk o yüzden ikinciyi tanımladık.
const FormStack = createNativeStackNavigator();

function FormStackYapisi() {
  return (
    <FormStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <FormStack.Screen name="SelectedForm" component={SelectedForm} />
      <FormStack.Screen name="LoginForm" component={LoginForm} />
    </FormStack.Navigator>
  );
};

export default Stack;
