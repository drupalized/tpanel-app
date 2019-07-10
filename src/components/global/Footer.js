// Global components.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Icon, List } from 'semantic-ui-react';

// Assets.
import logo from '../../assets/logo.svg';

// Styles.
import '../../styles/components/global/Footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer>
        <Grid container stackable>
          <Grid.Row>
            <Grid.Column width={ 4 }>
              <h4>TPanel</h4>
              <List link>
                <List.Item as="a" active>Home</List.Item>
                <List.Item as="a">About</List.Item>
                <List.Item as="a">Jobs</List.Item>
                <List.Item as="a">Team</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={ 4 }>
              <h4>Tipickly</h4>
              <List link>
                <List.Item as="a">Home</List.Item>
                <List.Item as="a">About</List.Item>
                <List.Item as="a">Jobs</List.Item>
                <List.Item as="a">Team</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={ 4 }>
              <h4>Information</h4>
              <List link>
                <List.Item as="a">Privacy Policy</List.Item>
                <List.Item as="a">Terms of Use</List.Item>
                <List.Item as="a">Jobs</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={ 4 }>
              <h4>Help</h4>
              <List link>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Open a Ticket</List.Item>
                <List.Item as="a">Give us Feedback</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="App__footer-social" textAlign="center">
            <Grid.Column width={ 16 }>
              <Link to="/"><Icon name="facebook" size="big" /></Link>
              <Link to="/"><Icon name="instagram" size="big" /></Link>
              <Link to="/"><Icon name="twitter" size="big" /></Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="App__footer-disclaimer" textAlign="center">
            <Grid.Column width={ 16 }>
              <p>
                <a href="https://tipickly.com">
                  <Image src={ logo } alt="logo" size="small" />
                </a>
              </p>
              <p>©2019 Tipickly</p>
              <p>All rights reserved. Google, Google Play, YouTube and other marks are trademarks of Google Inc.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
