import React from 'react';
import * as Yup from 'yup';

import AppForm from '../forms/AppForm';
import AppFormField from '../forms/AppFormField';
import ErrorMessage from '../forms/ErrorMessage';
import SubmitButton from '../forms/SubmitButton';

const validationSchema = Yup.object().shape({
  phone: Yup.string().required().label('Phone Number'),
});

export default function PhoneForm({ error, handleSubmit, loading }) {
  return (
    <AppForm
      initialValues={{ phone: '' }}
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
        keyboardType='phone-pad'
        name='phone'
        placeholder='+441234567890'
      />

      {
        loading
          ? <ActivityIndicator size='small' color='#0000ff' />
          : <SubmitButton title='Next step' />
      }
    </AppForm>
  );
};
