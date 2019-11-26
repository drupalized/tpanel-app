// Global components.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Form, Icon, Input } from 'semantic-ui-react';
import GoogleLogin from 'react-google-login';

// Styles.
import '../../styles/components/forms/RegisterForm.scss';

class RegisterForm extends Component {
  state = { fullName: '', username: '', password: '' };

  handleInputChange = fieldName => e => {
    this.setState({ [fieldName]: e.target.value });
  };

  handleUserRegister = () => {

  };

  render() {
    return (
      <div className="Register-form">
        <h1>Create your free account</h1>
        <Form>
          <Form.Field>
            <label>Full name</label>
            <Input
              placeholder="Full name"
              value={ this.state.fullName }
              icon="address card outline"
              iconPosition="left"
              onChange={ this.handleInputChange('fullName') }
            />
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <Input
              placeholder="Create a username"
              value={ this.state.username }
              icon="user circle"
              iconPosition="left"
              onChange={ this.handleInputChange('username') }
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
              type="password"
              placeholder="Define a password"
              value={ this.state.password }
              icon="user secret"
              iconPosition="left"
              onChange={ this.handleInputChange('password') }
            />
          </Form.Field>
          <Form.Field>
            <Button type="submit" size="large">Create account</Button>
          </Form.Field>
          <Form.Field>
            <small>By creating an account, you agree to our <Link to="#">Terms of Service</Link><br />
            No credit card needed for registration. You only pay when your site launches.</small>
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
                  <Icon name="google" />
                  Register with Google
                </Button>
              )}
              clientId="660770421681-fdcjktmfsr4i8rhq3b7cndnidrsl0312.apps.googleusercontent.com"
              onSuccess={ this.handleUserRegister }
              onFailure={ this.handleUserRegister }
              cookiePolicy={ 'single_host_origin' }
            />
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default RegisterForm;
