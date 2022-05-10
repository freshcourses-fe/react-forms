import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { SIGN_UP_CHEMA } from '../../utils/validationSchemas';
import styles from  './SignupForm.module.scss';

function signupUser(user) {
  alert('You are signed up!');
}

class SignupForm extends Component {
  submitHandler = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);

    formikBag.resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{
          login: '',
          password: '',
          passwordConfirm: '',
          email: '',
          isSubscribed: false,
          userPlan: '',
        }}
        onSubmit={this.submitHandler}
      >
        <Form
          className={styles.container}
        >
          <Field name="login" placeholder="Login" />
          <Field name="password" placeholder="password" type="password" />
          <Field
            name="passwordConfirm"
            placeholder="Repeat password"
            type="password"
          />
          <Field name="email" type="email" placeholder="email" />
          <Field name="userPlan" placeholder="Login" as="select">
            <option value="basic">Basic</option>
            <option value="pro">Pro</option>
          </Field>
          <label>
            <Field name="isSubscribed" type="checkbox" /> Subscribe to news
          </label>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    );
  }
}

export default SignupForm;
