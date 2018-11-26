import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Notifications } from 'expo';

export default class MenuItem extends React.Component {
  _handleNavigate = () => {
    const { navigation, goTo } = this.props;
    this._sendImmediateNotification();
    // navigation.navigate(goTo);
  };
  _sendImmediateNotification = () => {
    const localNotification = {
      title: 'Immediate testing Title',
      body: 'Testing body',
      data: { type: 'immediate' },
    };

    console.log('Scheduling immediate notification:', { localNotification });

    Notifications.presentLocalNotificationAsync(localNotification)
      .then(id => console.info(`Immediate notification scheduled (${id})`))
      .catch(err => console.error(err));
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
