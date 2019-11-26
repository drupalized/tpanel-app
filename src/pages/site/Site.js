// Global components.
import React, { Component } from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import * as Url from 'url';

// Redux.
import { connect } from 'react-redux';
import { changeActiveMenuItem } from '../../actions/menuActions';

// Custom components.
import LeftMenu from '../../components/global/LeftMenu';
import Search from '../../components/global/Search';
import SiteInfo from './SiteInfo';
import SiteStatus from './SiteStatus';
import SiteDomains from './SiteDomains';

// Styles.
import '../../styles/pages/site/Site.scss';

class Site extends Component {
  componentDidMount() {
    this.checkMenuItem();
  }

  componentDidUpdate() {
    this.checkMenuItem();
  }

  checkMenuItem = () => {
    const { activeMenuItem, changeActiveMenuItem } = this.props;
    const urlObject = Url.parse(window.location.href);
    const urlHash = urlObject.hash.replace('#', '');

    // Making sure the broser actions will load the right component.
    if (activeMenuItem !== urlHash) {
      changeActiveMenuItem(urlHash);
    }
  }

  render() {
    const { activeMenuItem } = this.props;

    return (
      <Grid className="Sites" container stackable>
        <Grid.Row>
          <Grid.Column><Search /></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={ 4 }>
            <LeftMenu />
          </Grid.Column>
          <Grid.Column className="Site" width={ 12 }>
            <Header as="h1" dividing disabled>
              <Icon name="terminal" />
              <Header.Content>
                Site Settings
                <Header.Subheader>Manage your site preferences</Header.Subheader>
              </Header.Content>
            </Header>
            { activeMenuItem === 'info' && <SiteInfo /> }
            { activeMenuItem === 'status' && <SiteStatus /> }
            { activeMenuItem === 'domains' && <SiteDomains /> }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  activeMenuItem: state.activeMenuItem.value,
});

const mapDispatchToProps = dispatch => ({
  changeActiveMenuItem: activeMenuItem => dispatch(
    changeActiveMenuItem(activeMenuItem)
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Site);
