import * as firebase from 'firebase';
import 'firebase/auth';

export const register = async (email, password) => {
  try {
    const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return { user };
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {
        error: 'This email address is already in use!'
      };
    }

    if (error.code === 'auth/invalid-email') {
      return {
        error: 'This email address is invalid!'
      };
    }

    return {
      error: 'Something went wrong, please try again!'
    };
  }
}
