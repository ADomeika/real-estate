import React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../config/colors';
import fonts from '../config/fonts';
import AppText from './AppText';

export default function OtherOffersCard({ item, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ flex: 1, marginTop: 16, marginRight: 16 }}>
        <View style={styles.imageHolder}>
          <Image source={{ uri: item.image }} style={styles.image} resizeMode='cover' />
          <View style={styles.distance}>
            <AppText style={styles.distanceText}>{item.distance} miles</AppText>
          </View>

          <View style={styles.favorite}>
            <Entypo name='heart-outlined' size={24} color={colors.white} />
          </View>

          <View style={styles.information}>
            <View style={{ flex: 1, }}>
              <AppText style={styles.title}>{item.title}</AppText>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Entypo name='location-pin' size={14} color={colors.white} />
                <AppText style={{ color: colors.white, fontSize: fonts.xs }}>{item.location}</AppText>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  imageHolder: {
    position: 'relative',
    height: 165,
    width: 287
  },
  image: {
    borderRadius: 16,
    width: '100%',
    height: '100%',
  },
  distance: {
    backgroundColor: colors.red,
    borderRadius: 4,
    position: 'absolute',
    top: 16,
    left: 24,
    paddingVertical: 5,
    paddingHorizontal: 16,
  },
  distanceText: {
    color: colors.white,
    fontSize: fonts.s
  },
  favorite: {
    position: 'absolute',
    top: 16,
    right: 24,
  },
  information: {
    position: 'absolute',
    bottom: 8,
    left: 24,
  },
  title: {
    color: colors.white,
    fontSize: fonts.m
  }
});
