import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Square(props) {

    const styles = StyleSheet.create({
        square: {
            backgroundColor: props.color,
            width: 100,
            height: 100
        }
    });


    return (
        <View style={styles.square}>

        </View>
    );
}


