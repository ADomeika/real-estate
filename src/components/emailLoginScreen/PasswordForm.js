import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppForm from '../forms/AppForm';
import AppFormField from '../forms/AppFormField';
import SubmitButton from '../forms/SubmitButton';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

const validationSchema = Yup.object().shape({
  password: Yup.string().required().label('Password'),
});

export default function PasswordForm({ handleSubmit }) {
  return (
    <AppForm
      initialValues={{ password: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {/* <ErrorMessage
        error='Invalid email/mobile number or password'
        visible={loginFailed}
      /> */}
      <AppFormField
        autoCapitalize='none'
        autoCorrect={false}
        name='password'
        placeholder='● ● ● ● ● ●'
        secureTextEntry
        textContentType='password'
        style={styles.field}
      />

      <SubmitButton title='Login' />
    </AppForm>
  );
};

const styles = StyleSheet.create({
  field: {
    color: colors.grey,
    flex: 1,
    fontSize: fonts.xl,
  },
});
