import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import colors from '../../config/colors';
import fonts from '../../config/fonts';
import AppText from '../AppText';

const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_MONTH = new Date().getMonth() + 1;
const CURRENT_DAY = new Date().getDay() === 0 ? 7 : new Date().getDay();

export default function DayComponent({ date, state, marking }) {
  console.log(marking);
  const isToday = 
    date.year === CURRENT_YEAR &&
    date.month === CURRENT_MONTH &&
    date.day === CURRENT_DAY;

  return (
    <TouchableWithoutFeedback onPress={() => console.log('onPress')}>
      <View style={{
        borderColor: '#e0e0e0',
        borderRadius: 54,
      }}>
        <AppText
          style={{
            textAlign: 'center',
            color: isToday ? colors.primary : state === 'disabled' ? 'gray' : 'black',
            fontSize: fonts.s,
          }}
        >
          {date.day}
        </AppText>
        <AppText
          style={{
            color: colors.primary,
            fontSize: fonts.s
          }}
        >
          $145
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({});
