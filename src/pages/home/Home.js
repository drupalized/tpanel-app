// Global components.
import React, { Component } from 'react';
import { Button, Grid, Icon } from 'semantic-ui-react';

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
          <Grid.Column>
            <Button basic color="pink" animated="vertical" size="large">
              <Button.Content visible>Create a new site</Button.Content>
              <Button.Content hidden><Icon name="plus" />Add</Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column><SitesView /></Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
