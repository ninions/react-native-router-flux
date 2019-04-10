import React, { Component, Fragment } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const barStyle = {
  white: 'dark-content',
  primary: 'light-content',
  secondary: 'light-content',
  transparent: 'dark-content',
  black: 'light-content',
  yellow: 'dark-content',
  dark: 'light-content',
  lighterDark: 'light-content',
};

const SFAView = (config = {}) =>
  WrappedComponent =>
  class extends Component {
    render() {
      const { top = {}, bottom = {} } = config;

      return (
        <Fragment>
          <SafeAreaView style={top.backgroundColor} forceInset={top.forceInset || { top: 'never' }} />
          <WrappedComponent {...this.props} />
          <SafeAreaView style={bottom.backgroundColor} forceInset={bottom.forceInset || { top: 'never' }} />
        </Fragment>
      );
    }
  };

export default SFAView;
