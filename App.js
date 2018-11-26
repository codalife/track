import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import {
  AppLoading,
  Asset,
  Font,
  Icon,
  Permissions,
  Notifications,
} from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { DBName, tables } from './constants/DB';
import registerForPushNotificationsAsync from './expo-sdk/expo-push-notification';
import createNotification from './utils/localNotification';

/*
 create or connect to DB on the app start

import { createDB, createTables } from './storage/sqlite';

const db = createDB(DBName);
createTables(db, tables);
//

/*
  Register for push notifications
*/
// registerForPushNotificationsAsync();
//

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  async componentDidMount() {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (permission.status === 'granted') {
      console.log('Notification permissions granted.');
    }
    Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.info(`Notification (${origin}) with data: ${JSON.stringify(data)}`);
  };

  _sendImmediateNotification = () => {
    const localNotification = {
      title: 'Immediate testing Title',
      body: 'Testing body',
      data: { type: 'immediate' },
      show_in_foreground: true,
      priority: 'high',
      icon: './assets/images/robot-dev.png',
    };

    console.log('Scheduling immediate notification:', { localNotification });

    Notifications.presentLocalNotificationAsync(localNotification)
      .then(id => console.info(`Immediate notification scheduled (${id})`))
      .catch(err => console.error(err));
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});
