import React from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import TextInput from '../components/TextInput';
import PropertyCard from '../components/PropertyCard';
import AppText from '../components/AppText';
import fonts from '../config/fonts';
import OtherOffersCard from '../components/OtherOffersCard';

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

  const onPropertyPress = (item) => {
    console.log('onPropertyPress', item);
  }

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TouchableOpacity style={styles.filter} onPress={() => console.log('Filters tapped')}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 2,
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
