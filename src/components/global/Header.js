// Global components.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Image, Menu } from 'semantic-ui-react';

// URL paths.
import { HOME, LOGIN } from '../../config/paths';

// Assets.
import logo from '../../assets/logo.svg';

// Styles.
import '../../styles/components/global/Header.scss'

class Header extends Component {
  render() {
    return (
      <header className="App__header">
        <Menu size="large" inverted>
          <Container>
            <Menu.Item as={ Link } to={ HOME } active header>
              <Image src={ logo } alt="logo" size="small" />
              TPanel
            </Menu.Item>
            <Menu.Item position="right">
              <Button as={ Link } to={ LOGIN } color="pink">Log in</Button>
              <Button className="App__header-signup" as="a" inverted>Sign Up</Button>
            </Menu.Item>
          </Container>
        </Menu>
      </header>
    );
  }
}

export default Header;
