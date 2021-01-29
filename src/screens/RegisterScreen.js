import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import AppText from '../components/AppText';
import EmailForm from '../components/registerScreen/EmailForm';
import PhoneForm from '../components/registerScreen/PhoneForm';
import colors from '../config/colors';
import fonts from '../config/fonts';
import useAuth from '../auth/useAuth';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function RegisterScreen() {
  const { signup, error, loading } = useAuth();
  let horizontalScrollView = null;
  StatusBar.setBarStyle('dark-content', true);

  const handleSubmitEmail = async ({ email, password }) => {
    await signup(email, password);
    horizontalScrollView.scrollTo({ x: SCREEN_WIDTH, y: 0, animated: true });
  };

  const handleSubmitPhone = async ({ phone }) => {
    console.log(phone);
    horizontalScrollView.scrollTo({ x: SCREEN_WIDTH * 2, y: 0, animated: true });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/background2.jpg')}
        style={styles.image}
      />

      <ScrollView>
        <View style={styles.bottomPart}>
          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled={false}
            style={{ width: SCREEN_WIDTH - 50 }}
            ref={(r) => horizontalScrollView = r}
          >
            <View style={{ width: SCREEN_WIDTH - 50 }}>
              <AppText style={styles.title}>
                Create new account
              </AppText>
              <AppText style={styles.subTitle}>
                Fill this form and jump to next step
              </AppText>
              <AppText style={styles.label}>
                Email
              </AppText>

              <EmailForm
                error={error}
                handleSubmit={handleSubmitEmail}
                loading={loading}
              />
            </View>
            
            <View style={{ width: SCREEN_WIDTH - 50, marginLeft: 50 }}>
              <AppText style={styles.title}>
                Confirm via SMS
              </AppText>
              <AppText style={styles.subTitle}>
                Enter your phone number to confirm your account
              </AppText>
              <AppText style={styles.label}>
                Phone Number
              </AppText>

              <PhoneForm
                error={error}
                handleSubmit={handleSubmitPhone}
                loading={loading}
              />
            </View>
            
            <View style={{ width: SCREEN_WIDTH - 50 }}>
              <AppText style={styles.title}>
                Enter the pin code
              </AppText>
              <AppText style={styles.subTitle}>
                Enter the pin code you received by text message
              </AppText>

              {/* <PinForm handleSubmit={handleSubmitPin} /> */}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bottomPart: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 350,
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 400,
    width: '100%',
  },
  title: {
    color: colors.dark,
    fontSize: fonts.xxl,
    fontWeight: '700'
  },
  subTitle: {
    color: colors.grey,
    fontSize: fonts.s,
    marginTop: 8,
    marginBottom: 24,
  },
  label: {
    fontSize: fonts.xs,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  or: {
    color: colors.grey,
    fontSize: fonts.s,
    textAlign: 'center',
  },
  terms: {
    color: colors.grey,
    fontSize: fonts.s,
  },
  termsLink: {
    color: colors.primary,
    fontSize: fonts.s,
    marginLeft: 6
  }
});
