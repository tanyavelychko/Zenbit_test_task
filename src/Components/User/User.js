import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

const User = () => {
    const currentUser = useSelector(state => state.user.name);
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Welcome back, {currentUser}</Text>
        </View>
    )
}

export default User;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        fontSize: 30,
        fontWeight: '500'
    }
});