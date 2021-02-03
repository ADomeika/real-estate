import React, { useRef, useState } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BottomSheet from 'reanimated-bottom-sheet';

import colors from '../config/colors';
import TextInput from '../components/TextInput';
import PropertyCard from '../components/PropertyCard';
import AppText from '../components/AppText';
import fonts from '../config/fonts';
import OtherOffersCard from '../components/OtherOffersCard';
import Filters from '../components/homeScreen/Filters';

const DATA = [
  {
    id: '1',
    title: 'Suny apartment',
    distance: 2.3,
    location: 'Los Angeles, CA',
    price: 123,
    bestOffer: true,
    image: 'https://picsum.photos/id/188/300/200',
  },
  {
    id: '2',
    title: 'Suny apartment',
    distance: 2.4,
    location: 'Los Angeles, CA',
    price: 234,
    bestOffer: false,
    image: 'https://picsum.photos/id/221/300/200',
  },
  {
    id: '3',
    title: 'Suny apartment',
    distance: 2.5,
    location: 'New York, NY',
    price: 345,
    bestOffer: false,
    image: 'https://picsum.photos/id/238/300/200',
  }
];

export default function HomeScreen() {
  StatusBar.setBarStyle('dark-content', true);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const sheetRef = useRef(null);

  const onPropertyPress = (item) => {
    console.log('onPropertyPress', item);
  }

  const onFiltersPress = () => {
    sheetRef.current.snapTo(1);
    setIsBottomSheetVisible(true);
  }

  const onCloseBottomSheet = () => {
    sheetRef.current.snapTo(2);
    setIsBottomSheetVisible(false)
  }

  return (
    <>
      <View style={[styles.container]}>
        <View style={[styles.search, { elevation: isBottomSheetVisible ? 0 : 2  }]}>
          <TouchableOpacity style={styles.filter} onPress={onFiltersPress}>
            <MaterialCommunityIcons name='filter-variant' size={26} color='white' />
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput
              icon='search'
              style={styles.searchField}
              placeholder='Search via City'
              inputStyle={styles.searchInput}
            />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView>
            {DATA.map((item) => {
              if (item.bestOffer) {
                return (
                  <View style={{ paddingHorizontal: 24 }} key={item.id}>
                    <AppText style={styles.otherOffersText}>Best offer in Poznań  🇵🇱</AppText>
                    <PropertyCard item={item} onPress={() => onPropertyPress(item)} />
                    <AppText style={[styles.otherOffersText, { marginTop: 27 }]}>Other apartments in Poznań 🇵🇱</AppText>
                  </View>
                );
              } else {
                return (
                  <View style={{ paddingHorizontal: 24 }} key={item.id}>
                    <PropertyCard item={item} onPress={() => onPropertyPress(item)} />
                  </View>
                )
              }
            })}
            <View>
              <AppText style={[styles.otherOffersText, { marginLeft: 28 } ]}>Other offers</AppText>
              <ScrollView
                horizontal
                contentContainerStyle={{
                  paddingLeft: 24,
                  paddingRight: 8,
                  paddingBottom: 24
                }}
              >
                {DATA.map((item) => (
                  <OtherOffersCard
                    key={item.id}
                    item={item}
                    onPress={() => onPropertyPress(item)}
                  />
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
        {
          isBottomSheetVisible ? (
            <TouchableWithoutFeedback
              onPress={onCloseBottomSheet}
            >
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(46, 48, 52, 0.6)'
                }}
              />
            </TouchableWithoutFeedback>
          ) : null
        }
      </View>

      <BottomSheet
        ref={sheetRef}
        snapPoints={['100%', 425, 0]}
        borderRadius={25}
        initialSnap={2}
        onCloseEnd={onCloseBottomSheet}
        renderContent={() => (
          <Filters />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingBottom: 20,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'ios' ? 65 : 25,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 0
    },
  },
  filter: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  searchWrapper: {
    backgroundColor: '#e4e4e7',
    borderRadius: 48,
    flex: 1,
    marginLeft: 16,
  },
  searchField: {
    borderBottomWidth: 0,
    paddingLeft: 15,
    marginVertical: 0
  },
  searchInput: {
    color: colors.dark,
  },
  otherOffersText: {
    color: colors.dark,
    fontSize: fonts.m,
    fontWeight: '700',
    marginTop: 10,
  },
});
