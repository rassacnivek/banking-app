import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SettingsPage extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Text>SettingsPage.js</Text>
      </View>
    );
  }
}

export default SettingsPage;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 23
  }
});