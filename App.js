import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import store from './src/redux/store';

import NavigationStack from './src/Navigation/NavigationStack';

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <NavigationStack />
            </NavigationContainer>
        </Provider>        
  );
}

const styles = StyleSheet.create({
    container: {
    
    },
});
