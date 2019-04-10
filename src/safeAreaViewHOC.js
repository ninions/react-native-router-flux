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
      const { top, bottom, headerStyle = {}, footerStyle = {} } = config;

      return (
        <Fragment>
          <SafeAreaView style={headerStyle} forceInset={{ top: top || 'never' }} />
          <WrappedComponent {...this.props} />
          <SafeAreaView style={footerStyle} forceInset={{ bottom: bottom || 'never' }} />
        </Fragment>
      );
    }
  };

export default SFAView;
