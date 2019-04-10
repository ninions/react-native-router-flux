import React, { Component, Fragment } from 'react';
import { StatusBar } from 'react-native';
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
      const { topConfig = {}, bottomConfig = {} } = config;

      return (
        <Fragment>
          <SafeAreaView style={topConfig.styles} forceInset={topConfig.forceInset} />
          <StatusBar
            translucent={true}
            barStyle={barStyle[topConfig.color]}
          />
          <WrappedComponent {...this.props} />
          <SafeAreaView style={bottomConfig.styles} forceInset={bottomConfig.forceInset} />
        </Fragment>
      );
    }
  };

module.exports = SFAView;
