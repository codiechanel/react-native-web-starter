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
  Dimensions,
  Image,
} from 'react-native';

import { Touchable } from './Touchable';
import { Home } from './Home';
import Todo from './Todo';
import { NavLink } from './NavLink';
import { Match, MemoryRouter as Router } from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import MyReducer from '../reducers/MyReducer';
import todos from '../reducers/TodoReducer';


const rootReducer = combineReducers({
  todos, MyReducer
})

const store = createStore(rootReducer)

export class App extends Component {
  render() {
    const Overlay = ({children, visible}) => (
      (visible) ? (
        <View style={styles.overlay}>
          <View style={styles.overlayMenu}>
            {children}
          </View>
        </View>
      ) : <View />
    )
    const componentFactory = (routeName) => () => (
      <View style={styles.factory}>
        <Text style={styles.route}>{routeName}</Text></View>
    )
    return (
      <Provider store={store} >
        <Router>
          <View style={styles.container}>
            <Overlay visible={true}>
              <NavLink to="/">

                <Text style={styles.routeLink}>
                  Home
                </Text>
              </NavLink>
              <NavLink to="/todo">

                <Text style={styles.routeLink}>
                  Todo
                </Text>
              </NavLink>
              <NavLink to="/topics">
                <Text style={styles.routeLink}>
                  Topics
                </Text>
              </NavLink>
            </Overlay>
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/todo" component={Todo} />
            <Match pattern="/topics" component={componentFactory('Topics')} />
          </View>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',

    //  alignItems: 'stretch',
    // backgroundColor: '#F5FCFF',
  },
  overlay: {
    // width: '400px',
    // alignSelf: 'stretch',
    //  width: Dimensions.get('window').width,
    // left: 0, top: 0,
    //  flex: 1,
    // position: 'absolute',
     zIndex: 1,
    // alignItems: 'center', justifyContent: 'center',
  },
  factory : {
   flex: 1,
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
  },
  overlayMenu: { flexDirection: 'row', padding: 10, 
  // height: 50,
   backgroundColor: 'rgba(0,255,255,0.8)' },
  logo: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  routeLink: {
    padding: 10
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
