import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';
import fonts from '../config/fonts';

export default function AppButton({
  color = 'primary',
  title,
  onPress,
  outline = false,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        outline ? styles.outline : null,
        { backgroundColor: colors[color] }
      ]}
      onPress={onPress}
    >
      <AppText
        style={[
          styles.text,
          outline ? styles.outlineText : null,
        ]}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 60,
    justifyContent: 'center',
    marginVertical: 10,
    padding: 15,
    width: '100%',
  },
  outline: {
    borderColor: '#e0e0e0',
    borderWidth: 2,
  },
  outlineText: {
    color: colors.dark,
  },
  text: {
    color: colors.white,
    fontSize: fonts.s,
    fontWeight: '700',
    lineHeight: 20
  },
});