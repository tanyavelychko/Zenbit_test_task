import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>We make things</Text>
        </View>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        fontSize: 40,
        fontWeight: '800'
    }
});