import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Notifications } from 'expo';
import { createNotification } from '../utils/localNotification';

export default class MenuItem extends React.Component {
  _handleNavigate = () => {
    const { navigation, goTo } = this.props;
    navigation.navigate(goTo);
  };

  render() {
    const { name } = this.props;

    return (
      <TouchableOpacity style={styles.menu} onPress={this._handleNavigate}>
        <Text>{name}</Text>
      </TouchableOpacity>
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
    color: '#DEA527',
  },
});
