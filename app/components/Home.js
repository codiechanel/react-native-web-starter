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
    Platform,
    Dimensions
} from 'react-native';

import { Touchable } from './Touchable';
import { NavLink } from './NavLink';
import { Match, MemoryRouter as Router } from 'react-router';
import * as actions from '../common/actions'

export class Home extends Component {
    constructor(props, ctx) {
        super(props, ctx);
        //    console.log(ctx)
        this.store = ctx.store

    }
    componentDidMount() {
        this.store.subscribe(() => console.log(this.store.getState()))
   
        const endpoint = 'https://www.google.com'
        const settings = {
            url: endpoint,
            responseType: 'json',
        }
        this.store.dispatch(actions.makeAjaxRequest(settings))
    }

    render() {


        return (
            <View style={styles.container}>

                <Image
                    style={styles.logo}
                    source={require('../assets/react-native-web.png')}
                    />
                <Touchable style={styles.touchable} onPress={() => console.log("Can't touched this?")}>
                    <Text style={styles.welcome}>
                        Welcome to React Native for Web Starter!
          </Text>
                    <Text style={styles.instructions}>
                        To get started, edit index.web.js
          </Text>
                    <Text style={styles.instructions}>
                        Press Cmd+R to reload,{'\n'}
                        Alt+Cmd+I for dev menu
          </Text>
                </Touchable>
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
            </View>
        );
    }
}

Home.contextTypes = {
    store: React.PropTypes.object.isRequired,
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
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
});
