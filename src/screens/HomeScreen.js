import * as React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';


const instructions = Platform.select({
    ios: `Press Cmd+R to reload for ios,\nCmd+D or shake for dev menu`,
    android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to the Reading Tutor!</Text>
            <Text style={styles.instructions}>To get started, click here!</Text>
            <Text style={styles.instructions}>{instructions}</Text>
            <Button title="Click here to go to the Lessons page"
                onPress={() => navigation.navigate('Lessons')}
            ></Button>
        </View>
    );
}

export default HomeScreen;
