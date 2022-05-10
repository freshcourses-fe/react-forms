import React, { Component } from 'react';

function signupUser(user) {
  console.log(user);
  alert('You are signed up!');
}

class SignupForm extends Component {
  state = {
    login: '',
    password: '',
    passwordConfirm: '',
    email: '',
    isSubscribed: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    signupUser(this.state);
  };

  handleChange = (e) => {
    const {
      target: { value, checked, name, type },
    } = e;

    const newValue = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: newValue,
    });
  };

  render() {
    const { login, password, passwordConfirm, email, isSubscribed } =
      this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: 'flex',
          width: '300px',
          flexDirection: 'column',
          margin: '0 auto',
          gap: '10px',
        }}
      >
        <input
          name="login"
          placeholder="Login"
          value={login}
          onChange={this.handleChange}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          value={password}
          onChange={this.handleChange}
        />
        <input
          name="passwordConfirm"
          placeholder="Repeat password"
          type="password"
          value={passwordConfirm}
          onChange={this.handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
        />
        <label>
          <input
            name="isSubscribed"
            type="checkbox"
            checked={isSubscribed}
            onChange={this.handleChange}
          />{' '}
          Subscribe to news
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default SignupForm;
