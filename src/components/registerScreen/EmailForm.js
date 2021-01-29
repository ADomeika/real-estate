import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppForm from '../forms/AppForm';
import AppFormField from '../forms/AppFormField';
import ErrorMessage from '../forms/ErrorMessage';
import colors from '../../config/colors';
import fonts from '../../config/fonts';
import SubmitButton from '../forms/SubmitButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password'),
});

export default function EmailForm({ error, handleSubmit, loading }) {
  return (
    <AppForm
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <ErrorMessage
        error={error}
        visible={error?.length > 0}
      />
      <AppFormField
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        name='email'
        placeholder='example@example.com'
      />
      
      <AppFormField
        autoCapitalize='none'
        autoCorrect={false}
        name='password'
        placeholder='● ● ● ● ● ●'
        secureTextEntry
        textContentType='password'
        style={styles.field}
      />

      {
        loading
          ? <ActivityIndicator size='small' color='#0000ff' />
          : <SubmitButton title='Next step' />
      }
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
