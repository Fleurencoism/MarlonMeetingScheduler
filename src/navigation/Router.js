import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import AddHostScreen from '../screens/AddHost';
import HostsScreen from '../screens/Hosts';
import MeetingsScreen from '../screens/Meetings';
import TabNavigator from './TabNavigator';


const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={'Start Scheduling!'} component={TabNavigator}/>
        <Stack.Screen name={'Add Host'} component={AddHostScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;