import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MenuItem extends React.Component {
  render() {
    const { name, goTo } = this.props;

    return (
      <View style={styles.menu} onPress={() => navigate(goTo)}>
        <Text>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    display: 'flex',
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
    color: '#fff',
  },
});
