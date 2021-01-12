import React, { useEffect, useState } from 'react';

import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useSelector } from 'react-redux';

import {getData} from '../asyncStorage';

import MainScreen from '../Components/MainScreen/MainScreen';
import News from '../Components/News/News';
import User from '../Components/User/User';
import Auth from '../Components/Auth/Auth';

import { useDispatch } from 'react-redux';


const Stack = createBottomTabNavigator();

const NavigationStack = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
      const checkUser = async () => {
          const isAuthenticated = await getData('@authenticated');
          setIsAuthenticated(isAuthenticated || user.name && user.password);
          if (isAuthenticated) {
            dispatch({type: 'SET_USER', payload: JSON.parse(isAuthenticated)});
          }
      }
      checkUser();
    }, [user]);
    return(
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="News" component={News} />
          {
            isAuthenticated ? <Stack.Screen name="User" component={User} /> : 
            <Stack.Screen name="User" component={Auth} /> 
          }
        </Stack.Navigator>
    );
}

export default NavigationStack;