import React, { Component, Fragment } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
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

const styles = StyleSheet.create({
  fixBackground: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 100,
    zIndex: -1000,
  }
})

const SFAView = (config = {}) =>
  WrappedComponent =>
  class extends Component {
    render() {
      const { top, bottom, headerStyle = {}, footerStyle = {} } = config;

      return (
        <Fragment>
          <SafeAreaView style={[{ flex: 1 }, headerStyle]} forceInset={top && { top: top }}>
            <WrappedComponent {...this.props} />
            <View style={[styles.fixBackground, footerStyle]} />
          </SafeAreaView>
        </Fragment>
      );
    }
  };

export default SFAView;
