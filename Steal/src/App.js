import React from 'react';
import { Root } from 'native-base';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

/**
 * Screens
 */
//Home
import HomeScreen from './screens/Home/HomeScreen';
//Sidebar
import SideBar from './components/Sidebar';
//Profile
import ProfileScreen from './screens/Profile/ProfileScreen';
//DropList
import currentItems from './screens/Droplists/currentItems';

const Drawer = createDrawerNavigator(
    {
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
    },
    {
        initialRouteName: "Home",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);

const AppNavigator = createStackNavigator(
    {
        Drawer: {screen: Drawer},
        Home: {screen: HomeScreen},
        Profile: {screen: ProfileScreen},
        Droplist: {screen: currentItems},
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
    <Root>
        <AppContainer />
    </Root>;
