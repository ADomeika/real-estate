import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import AppButton from '../components/AppButton';

import AppText from '../components/AppText';
import EmailOrMobileForm from '../components/emailLoginScreen/EmailOrMobileForm';
import PasswordForm from '../components/emailLoginScreen/PasswordForm';
import colors from '../config/colors';
import fonts from '../config/fonts';

const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function EmailLoginScreen() {
  let horizontalScrollView = null;
  StatusBar.setBarStyle('dark-content', true);
  
  const handleSubmitEmail = async ({ emailOrMobile }) => {
    if (emailOrMobile.match(regexEmail)) {
      console.log('matches email:', emailOrMobile);
    } else {
      console.log('does not match email, so probably a phone number:', emailOrMobile);
    }

    horizontalScrollView.scrollTo({ x: SCREEN_WIDTH, y: 0, animated: true });
  };

  const handleSubmitPassword = async ({ password }) => {
    console.log(password);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/background1.jpg')}
        style={styles.image}
      />

      <ScrollView>
        <View style={styles.bottomPart}>
          <AppText style={styles.title}>Welcome Back!</AppText>

          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled={false}
            style={{ width: SCREEN_WIDTH - 50 }}
            ref={(r) => horizontalScrollView = r}
          >
            <View style={{ width: SCREEN_WIDTH - 50 }}>
              <AppText style={styles.subTitle}>Enter your email or number</AppText>
              <AppText style={styles.label}>Email or mobile number</AppText>

              <EmailOrMobileForm handleSubmit={handleSubmitEmail} />

              <AppText style={styles.or}>or</AppText>

              <AppButton
                title='Create an account'
                color='transparent'
                outline
              />
            </View>
            
            <View style={{ width: SCREEN_WIDTH - 50 }}>
              <AppText style={styles.subTitle}>Enter your password</AppText>
              <AppText style={styles.label}>Password</AppText>

              <PasswordForm handleSubmit={handleSubmitPassword} />

              <AppText style={styles.or}>or</AppText>

              <AppButton
                title='Forgot password'
                color='transparent'
                outline
              />
            </View>
          </ScrollView>

          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              marginTop: 50
            }}
          >
            <AppText style={styles.terms}>
              By signing in you agree to our
            </AppText>
            <TouchableOpacity>
              <AppText style={styles.termsLink}>Terms of Service</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

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
