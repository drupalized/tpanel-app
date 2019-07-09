// Global components.
import React, { Component } from 'react';
import { Button, Grid, Icon, Label } from 'semantic-ui-react';
import GoogleLogin from 'react-google-login';

// Custom components.


// Styles.
import '../../styles/pages/login/Login.scss';

class Login extends Component {
  responseLogin = response => {
    console.log(response);
  }

  render() {
    return (
      <Grid className="Login" container stackable>
        <Grid.Row>
          <Grid.Column width={10}>
            <h1>Login</h1>
            <p>Use your Google account to get access to Tipickly.</p>
            <GoogleLogin
              render={renderProps => (
                <Button
                  icon
                  labelPosition='left'
                  onClick={ renderProps.onClick }
                  disabled={ renderProps.disabled }
                >
                  <Icon name='google' />
                  Login
                </Button>
              )}
              clientId="660770421681-fdcjktmfsr4i8rhq3b7cndnidrsl0312.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={ this.responseLogin }
              onFailure={ this.responseLogin }
              cookiePolicy={'single_host_origin'}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            Test
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Login;
