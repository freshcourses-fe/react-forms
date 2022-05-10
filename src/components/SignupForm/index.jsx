import React, { Component } from 'react';
import { SIGN_UP_CHEMA } from '../../utils/validationSchemas';
import { Formik, Form, Field } from 'formik';

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
          userPlan: ''
        }}
        onSubmit={this.submitHandler}
      >
        {(formikProps) => {
          // console.log(formikProps);

          return (
            <Form
              style={{
                display: 'flex',
                width: '300px',
                flexDirection: 'column',
                margin: '0 auto',
                gap: '10px',
              }}
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
                <option value='basic'>Basic</option>
                <option value='pro'>Pro</option>
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
