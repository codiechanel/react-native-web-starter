/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import { Touchable } from './Touchable';
import { Home } from './Home';
import { Match, MemoryRouter as Router } from 'react-router';

export class App extends Component {
  render() {
    const componentFactory = (routeName) => () => (
      <View>
        <Text style={styles.route}>{routeName}</Text></View>
    )
    return (
      <Router>
        <View style={styles.container}>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/about" component={componentFactory('About')} />
          <Match pattern="/topics" component={componentFactory('Topics')} />
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 10,
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
  touchable: {
    backgroundColor: '#CAE6FE',
  },
  route: {
    color: '#701010',
    fontSize: 40
  },
});
