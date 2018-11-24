import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Button,
  TextInput,
  Text,
} from 'react-native';
import Moment from 'react-moment';
import getDate from '../utils/getDate';

const now = new Date();

export default class LinksScreen extends React.Component {
  static navigationOptions = { title: 'New medication info' };

  state = {
    name: 'input name here',
    noEnd: false,
    startDate: now,
    endDate: now,
  };

  _handleTextChange = text => {
    this.setState({ name: text });
  };

  _setStartDate = () => {
    getDate((year, month, day) => {
      this.setState({
        startDate: `${month}/${day}/${year}`,
      });
    });
  };

  _setEndDate = () => {
    getDate((year, month, day) => {
      this.setState({
        endDate: `${month}/${day}/${year}`,
      });
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <TextInput
          onChangeText={this._handleTextChange}
          value={this.state.name}
        />
        <Button
          onPress={this._setStartDate}
          title="Star Date"
          color="#841584"
        />
        <Moment element={Text} format="YYYY/MM/DD">
          {this.state.startDate}
        </Moment>
        <Button
          onPress={this._setEndDate}
          title="End Date"
          color="#841584"
          disabled={this.state.noEnd}
        />
        <Moment element={Text} format="YYYY/MM/DD">
          {this.state.endDate}
        </Moment>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
