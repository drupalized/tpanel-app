// Global components.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Form, Icon, Input } from 'semantic-ui-react';
import GoogleLogin from 'react-google-login';

// Styles.
import '../../styles/components/forms/LoginForm.scss';

class LoginForm extends Component {
  state = { username: '', password: '', rememberMe: false };

  handleInputChange = fieldName => e => {
    this.setState({ [fieldName]: e.target.value });
  };

  handleRememberMe = e => {
    this.setState({ rememberMe: !this.state.rememberMe });
  };

  handleUserLogin = () => {

  };

  render() {
    return (
      <div className="Login-form">
        <h1>Login</h1>
        <Form>
          <Form.Field>
            <label>Username</label>
            <Input
              placeholder="Username"
              value={ this.state.username }
              icon="user circle"
              iconPosition="left"
              onChange={ this.handleInputChange('username') }
            />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <Input
              type="password"
              placeholder="Password"
              value={ this.state.password }
              icon="user secret"
              iconPosition="left"
              onChange={ this.handleInputChange('password') }
            />
          </Form.Field>
          <Form.Field>
            <Link to="/">Forgot my password</Link>
          </Form.Field>
          <Form.Field>
            <Button type="submit" size="large">Log in</Button>
          </Form.Field>
          <Divider horizontal>Or</Divider>
          <Form.Field>
            <GoogleLogin
              render={renderProps => (
                <Button
                  icon
                  size="large"
                  labelPosition="left"
                  color="pink"
                  onClick={ renderProps.onClick }
                  disabled={ renderProps.disabled }
                >
                  <Icon name='google' />
                  Google Login
                </Button>
              )}
              clientId="660770421681-fdcjktmfsr4i8rhq3b7cndnidrsl0312.apps.googleusercontent.com"
              onSuccess={ this.responseLogin }
              onFailure={ this.responseLogin }
              cookiePolicy={ 'single_host_origin' }
            />
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
