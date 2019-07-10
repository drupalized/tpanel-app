// Global components.
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

// Custom components.
import SitesView from '../../components/views/SitesView';
import Search from '../../components/global/Search';

// Styles.
import '../../styles/pages/home/Home.scss';

class Home extends Component {
  render() {
    return (
      <Grid className="Home" container stackable>
        <Grid.Row>
          <Grid.Column><Search /></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column><SitesView /></Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
