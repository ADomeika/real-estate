import React from 'react';
import * as Yup from 'yup';

import AppForm from '../forms/AppForm';
import AppFormField from '../forms/AppFormField';
import SubmitButton from '../forms/SubmitButton';

const validationSchema = Yup.object().shape({
  emailOrMobile: Yup.string().required().label('Email or Mobile'),
});

export default function EmailOrMobileForm({ handleSubmit }) {
  return (
    <AppForm
      initialValues={{ emailOrMobile: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {/* <ErrorMessage
        error='Invalid email or mobile number'
        visible={loginFailed}
      /> */}
      <AppFormField
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
        name='emailOrMobile'
        placeholder='example@example.com'
      />

      <SubmitButton title='Next step' />
    </AppForm>
  );
};
