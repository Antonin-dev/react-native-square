import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Square from './components/Square';

export default function App() {
  return (
    <View style={styles.container}>
      <Square
        color={"green"}
      />
      <Square
          color={"orange"}
      />
      <Square
          color={"purple"}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    alignItems: 'center'

  },
});
