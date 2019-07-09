// Global components.
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

// Styles.
import '../../styles/components/global/LeftMenu.scss'

class LeftMenu extends Component {
  state = {
    activeMenuItem: 'sites',
  };

  handleItemClick = (e, { name }) => this.setState({ activeMenuItem: name });

  render() {
    const { activeMenuItem } = this.state;

    return (
      <Menu color="pink" fluid pointing secondary vertical>
        <Menu.Item name="sites"
          active={ activeMenuItem === "sites" }
          onClick={ this.handleItemClick }
        >
          Sites
        </Menu.Item>
        <Menu.Item name="status"
          active={ activeMenuItem === "status" }
          onClick={ this.handleItemClick }
        />
        <Menu.Item
          name="errors"
          active={ activeMenuItem === "errors" }
          onClick={ this.handleItemClick }
        />
        <Menu.Item
          name="domains"
          active={ activeMenuItem === "domains" }
          onClick={ this.handleItemClick }
        />
        <Menu.Item
          name="teams"
          active={ activeMenuItem === "teams" }
          onClick={ this.handleItemClick }
        />
      </Menu>
    );
  }
}

export default LeftMenu;
