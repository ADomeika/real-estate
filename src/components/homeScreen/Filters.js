import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';

import colors from '../../config/colors';
import fonts from '../../config/fonts';
import DayComponent from './DayComponent';

const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_MONTH = new Date().getMonth() + 1;
const CURRENT_DAY = new Date().getDay() === 0 ? 7 : new Date().getDay();
const MIN_DATE = new Date().getTime();
const TWO_YEARS = 63113904000;
const MAX_DATE = new Date().getTime() + TWO_YEARS;

export default function Filters() {
  const [selected, setSelected] = useState('');
  const [isLeftArrowDisabled, setIsLeftArrowDisabled] = useState(true);
  const [isRightArrowDisabled, setIsRightArrowDisabled] = useState(false);
  
  const onMonthChange = ({ year, month }) => {
    if (year === CURRENT_YEAR && month === CURRENT_MONTH) {
      setIsLeftArrowDisabled(true);
    } else {
      setIsLeftArrowDisabled(false);
    }
    
    if (
      year ===  new Date(MAX_DATE).getFullYear() &&
      month === new Date(MAX_DATE).getMonth() + 1
    ) {
      setIsRightArrowDisabled(true);
    } else {
      setIsRightArrowDisabled(false);
    }
  };

  const onDayPress = (day) => {
    setSelected(day.dateString);
  };

  const renderArrow = (direction) => (
    direction === 'left'
      ? <Fontisto
          name='angle-left'
          size={20}
          color={isLeftArrowDisabled ? colors.grey : colors.dark}
        />
      : <Fontisto
          name='angle-right'
          size={20}
          color={isRightArrowDisabled ? colors.grey : colors.dark}
        />
  );

  return (
    <View
      style={styles.container}
    >
      <Fontisto
        name='minus-a'
        size={38}
        color={colors.grey}
        style={styles.indicator}
      />
      
      <ScrollView style={{ paddingHorizontal: 24 }}>
        <View style={{ paddingBottom: 16 }}>
          <Calendar
            minDate={MIN_DATE}
            maxDate={MAX_DATE}
            onDayPress={onDayPress}
            // Handler which gets executed on day long press. Default = undefined
            // onDayLongPress={(day) => {console.log('selected day', day)}}
            monthFormat={'MMMM yyyy'}
            onMonthChange={onMonthChange}
            renderArrow={renderArrow}
            firstDay={1}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={(subtractMonth) => subtractMonth()}
            disableArrowLeft={isLeftArrowDisabled}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={(addMonth) => addMonth()}
            disableArrowRight={isRightArrowDisabled}
            disableAllTouchEventsForDisabledDays={true}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                customStyles: {
                  container: {
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderColor: '#e0e0e0',
                  },
                  text: {
                    color: colors.dark,
                  }
                },
              }
            }}
            dayComponent={(props) => (
              <DayComponent {...props} />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  indicator: {
    textAlign: 'center',
    marginBottom: -7,
  },
  date: {
    color: colors.dark,
    fontSize: fonts.m,
    fontWeight: '700',
    marginBottom: 16,
  },
  weekday: {
    color: colors.dark,
    fontSize: fonts.s,
  }
});
