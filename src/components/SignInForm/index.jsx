import React from 'react';
import { Form, Formik, Field } from 'formik';

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const onSubmit = (values, formikBag) => {
    console.log(values);

    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field name="email"  placeholder='email'/>
        <Field name="password" type='password' placeholder='password'/>
        <button type='submit'>Sign in</button>
      </Form>
    </Formik>
  );
};

export default SignInForm;
