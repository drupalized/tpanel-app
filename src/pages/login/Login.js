// Global components.
import React, { Component } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';

// Custom components.
import LoginForm from '../../components/forms/LoginForm';

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
          <Grid.Column width={ 12 }>
            <LoginForm />
          </Grid.Column>
          <Grid.Column className="Login-register" width={ 4 }>
            <h2>Not yet registered?</h2>
            <p>Register now to start creating new websites. It's simple, easy and intuitive!</p>
            <p>The registration is quick and free!</p>
            <Form>
              <Form.Field>
                <Button type="submit" size="large" color="pink">Register</Button>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Login;
