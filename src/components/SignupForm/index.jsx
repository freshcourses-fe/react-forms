import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import { SIGN_UP_CHEMA } from '../../utils/validationSchemas';
import styles from './SignupForm.module.scss';
import Input from '../Input';

function signupUser(user) {
  alert('You are signed up!');
}

const initialValues = {
  login: '',
  password: '',
  passwordConfirm: '',
  email: '',
  isSubscribed: false,
  userPlan: '',
};

class SignupForm extends Component {
  submitHandler = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);

    formikBag.resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={SIGN_UP_CHEMA}
        onSubmit={this.submitHandler}
      >
        {(formikProps) => {
          return (
            <Form className={styles.container}>
              <Input name="login" placeholder="Login" />
              <Input name="password" placeholder="password" type="password" />
              <Input
                name="passwordConfirm"
                placeholder="Repeat password"
                type="password"
              />
              <Input name="email" type="email" placeholder="email" />
              <Field name="userPlan" placeholder="Login" as="select">
                <option value="basic">Basic</option>
                <option value="pro">Pro</option>
              </Field>
              <label>
                <Field name="isSubscribed" type="checkbox" /> Subscribe to news
              </label>
              <button type="submit">Sign Up</button>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default SignupForm;
