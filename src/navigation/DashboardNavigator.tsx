import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from '@ui-kitten/components';
import {HomeScreen} from '../screens/home/HomeScreen';
const Stack = createStackNavigator();

const Mockup = () => <Text>testing Now </Text>;

export const DashboardNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Auth" component={Mockup} />
    <Stack.Screen name="Social" component={Mockup} />
    <Stack.Screen name="Articles" component={Mockup} />
    <Stack.Screen name="Messaging" component={Mockup} />
    <Stack.Screen name="Dashboards" component={Mockup} />
    <Stack.Screen name="Ecommerce" component={Mockup} />
  </Stack.Navigator>
);
