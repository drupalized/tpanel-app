// Global components.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid } from 'semantic-ui-react';

// Custom components.
import LoginForm from '../../components/forms/LoginForm';

// URL paths.
import { REGISTER } from '../../config/paths';

// Styles.
import '../../styles/pages/login/Login.scss';

class Login extends Component {
  render() {
    return (
      <Grid className="Login" container stackable>
        <Grid.Row>
          <Grid.Column computer={ 10 } tablet={ 16 }>
            <LoginForm />
          </Grid.Column>
          <Grid.Column className="Login-register" computer={ 6 } tablet={ 16 }>
            <h2>Not yet registered?</h2>
            <p>Register now to start creating new websites. It's simple, easy and intuitive!</p>
            <p>The registration is quick and free!</p>
            <Form>
              <Form.Field>
                <Button as={ Link } to={ REGISTER } size="large" color="pink">Register</Button>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Login;
