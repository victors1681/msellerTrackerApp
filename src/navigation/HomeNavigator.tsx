import React from 'react';
import {RouteProp} from '@react-navigation/core';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Text} from '@ui-kitten/components';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {LayoutsNavigator} from './layouts.navigator';
// import {ComponentsNavigator} from './components.navigator';
import {DashboardNavigator} from './DashboardNavigator';
import {HomeBottomNavigation} from '../screens/home/home-bottom-navigation';
import {HomeDrawer} from '../screens/home/home-drawer';
// import {LibrariesScreen} from '../scenes/libraries/libraries.component';

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/*
 * When dev is true in .expo/settings.json (started via `start:dev`),
 * open Components tab as default.
 */
const initialTabRoute: string = __DEV__ ? 'Home' : 'Home';

/*
 * Can we access it from `HomeNavigator`?
 */
const ROOT_ROUTES: string[] = ['Home', 'Orders', 'Account', 'Themes'];

const isOneOfRootRoutes = (currentRoute: RouteProp<any, any>): boolean => {
  return ROOT_ROUTES.find((route) => currentRoute.name === route) !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({
  route,
}): BottomTabNavigationOptions => {
  const currentRoute = route.state && route.state.routes[route.state.index];
  return {tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute)};
};

const Mockup = () => (
  <View>
    <Text>testing </Text>
  </View>
);

const HomeTabsNavigator = (): React.ReactElement => (
  <BottomTab.Navigator
    screenOptions={TabBarVisibleOnRootScreenOptions}
    initialRouteName={initialTabRoute}
    tabBar={(props) => <HomeBottomNavigation {...props} />}>
    <BottomTab.Screen name="Home" component={DashboardNavigator} />
    <BottomTab.Screen name="Orders" component={Mockup} />
    <BottomTab.Screen name="Account" component={Mockup} />
  </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
  <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={{gestureEnabled: false}}
    drawerContent={(props) => <HomeDrawer {...props} />}>
    <Drawer.Screen name="Home" component={HomeTabsNavigator} />
    <Drawer.Screen name="Libraries" component={Mockup} />
  </Drawer.Navigator>
);
