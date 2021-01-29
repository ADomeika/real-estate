import React from 'react';
import { StyleSheet, Text } from 'react-native';
import fonts from '../config/fonts';

export default function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#111',
    fontSize: fonts.l,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  }
});