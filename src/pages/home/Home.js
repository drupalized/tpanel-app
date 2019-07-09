// Global components.
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

// Custom components.
import LeftMenu from '../../components/global/LeftMenu';
import SitesView from '../../components/views/SitesView';

// Styles.
import '../../styles/pages/home/Home.scss';

class Home extends Component {
  render() {
    return (
      <Grid className="Home" container stackable>
        <Grid.Row>
          <Grid.Column width={4}><LeftMenu /></Grid.Column>
          <Grid.Column width={12}><SitesView /></Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
