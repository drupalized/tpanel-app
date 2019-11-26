// Global components.
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

// Redux.
import { connect } from 'react-redux';
import { changeActiveMenuItem } from '../../actions/menuActions';

// History.
import history from '../../config/history';

// Styles.
import '../../styles/components/global/LeftMenu.scss';

class LeftMenu extends Component {
  handleMenuItemChange = (e, { name }) => {
    const { changeActiveMenuItem } = this.props;

    // Changing the menu item on the redux store.
    changeActiveMenuItem(name);

    // Updating the URL.
    history.push(`#${ name }`);
  }

  render() {
    const { activeMenuItem } = this.props;

    return (
      <Menu color="pink" fluid pointing secondary vertical>
        <Menu.Item
          name="info"
          active={ activeMenuItem === "info" }
          onClick={ this.handleMenuItemChange }
        >
          Site Info
        </Menu.Item>
        <Menu.Item
          name="status"
          active={ activeMenuItem === "status" }
          onClick={ this.handleMenuItemChange }
        >
          Status
        </Menu.Item>
        <Menu.Item
          name="domains"
          active={ activeMenuItem === "domains" }
          onClick={ this.handleMenuItemChange }
        >
          Domains
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  activeMenuItem: state.activeMenuItem.value,
});

const mapDispatchToProps = dispatch => ({
  changeActiveMenuItem: activeMenuItem => dispatch(
    changeActiveMenuItem(activeMenuItem)
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
