import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Text>HomePage.js</Text>
      </View>
    );
  }
}

export default HomePage;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 23
  }
});