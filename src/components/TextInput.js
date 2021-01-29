import React from 'react';
import { StyleSheet, TextInput, View, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import fonts from '../config/fonts';

export default function AppTextInput({
  icon,
  width = '100%',
  style,
  inputStyle,
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }, style]}>
      {icon && (
        <MaterialIcons
          name={icon}
          size={20}
          color={colors.grey}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.grey}
        style={[styles.textInput, inputStyle]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'rgba(143,146,161, 0.2)',
    borderBottomWidth: 2,
    flexDirection: 'row',
    paddingVertical: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: colors.grey,
    fontSize: fonts.s,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  }
});
