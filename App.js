import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AppText from './src/components/AppText';
// import * as firebase from 'firebase';

// import AuthContext from './src/auth/context';
// import EmailLoginScreen from './src/screens/EmailLoginScreen';
// import RegisterScreen from './src/screens/RegisterScreen';
// import firebaseConfig from './src/config/firebase';
import HomeScreen from './src/screens/HomeScreen';
// firebase.initializeApp(firebaseConfig);

export default function App() {
  // const [user, setUser] = useState(null);
  // const [isReady, setIsReady] = useState(false);
  
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       setUser(user);
  //     }
  //     setIsReady(true);
  //   });
  // }, []);

  // if (!isReady) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator size='large' color='#0000ff' />
  //     </View>
  //   );
  // }

  return (
    // <AuthContext.Provider value={{ user, setUser }}>
    //   <RegisterScreen />
    // </AuthContext.Provider>
    // <EmailLoginScreen />

    <HomeScreen />

    // <ScrollView>
    //   <ScrollView horizontal>
    //     <View>
    //       <AppText>TEST</AppText>
    //     </View>
    //     <View>
    //       <AppText>GTEST</AppText>
    //     </View>
    //   </ScrollView>
    //   <ScrollView horizontal>
    //     <View>
    //       <AppText>GTEST</AppText>
    //     </View>
    //     <View>
    //       <AppText>TEST</AppText>
    //     </View>
    //   </ScrollView>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
