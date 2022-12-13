import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import LoginPage from "./Pages/LoginPage";
import SelectedForm from "./Pages/SelectedForm";
import LoginForm from "./Forms/LoginForm";
import FormListeleme from "./Pages/FormArsivi";
import ProfilePage from "./Pages/ProfilePage";

class Stack extends Component{
    render(){
        return(
            <AppContainer />
        )
    }
}

const myStack = createStackNavigator({
    'LoginPage' : LoginPage,
    'SelectedForm': SelectedForm,
    'LoginForm': LoginForm,
    'FormListeleme': FormListeleme,
    'ProfilePage': ProfilePage,
}, {
    initialRouteName: 'LoginPage',
    
});

const AppContainer = createAppContainer(myStack);

export default Stack;

/*


*/