import React, { Component } from 'react';
import {
  TouchableHighlight

} from 'react-native';
export const NavLink = ({to, children}, context) => {
  const pressHandler = () => context.router.transitionTo(to);
  return (
    <TouchableHighlight onPress={pressHandler}>
      {children}
    </TouchableHighlight>
  )
}
NavLink.contextTypes = {router: React.PropTypes.object}