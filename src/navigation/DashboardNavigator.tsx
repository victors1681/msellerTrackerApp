import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from '@ui-kitten/components';

const Stack = createStackNavigator();

const Mockup = () => <Text>testing </Text>;

export const DashboardNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Layouts" component={Mockup} />
    <Stack.Screen name="Auth" component={Mockup} />
    <Stack.Screen name="Social" component={Mockup} />
    <Stack.Screen name="Articles" component={Mockup} />
    <Stack.Screen name="Messaging" component={Mockup} />
    <Stack.Screen name="Dashboards" component={Mockup} />
    <Stack.Screen name="Ecommerce" component={Mockup} />
  </Stack.Navigator>
);
