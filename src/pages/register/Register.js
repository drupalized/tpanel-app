// Global components.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid } from 'semantic-ui-react';

// Custom components.
import RegisterForm from '../../components/forms/RegisterForm';

// URL paths.
import { LOGIN } from '../../config/paths';

// Styles.
import '../../styles/pages/register/Register.scss';

class Register extends Component {
  render() {
    return (
      <Grid className="Register" container stackable>
        <Grid.Row>
          <Grid.Column computer={ 10 } tablet={ 16 }>
            <RegisterForm />
          </Grid.Column>
          <Grid.Column className="Register-login" computer={ 6 } tablet={ 16 }>
            <h2>Already registered?</h2>
            <p>Login now to start creating new websites. It's simple, easy and intuitive!</p>
            <Form>
              <Form.Field>
                <Button as={ Link } to={ LOGIN } size="large" color="pink">Login</Button>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Register;
