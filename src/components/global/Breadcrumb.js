// Global components.
import React, { Component } from 'react';
import { Breadcrumb as BreadcrumbLinks, Grid } from 'semantic-ui-react';

// Styles.
import '../../styles/components/global/Breadcrumb.scss'

class Breadcrumb extends Component {
  render() {
    const sections = [
      { key: 'Home', content: 'Home', link: true },
      { key: 'Store', content: 'Store', link: true },
      { key: 'Shirt', content: 'T-Shirt', active: true },
    ];

    return (
      <Grid className="Breadcrumb" container>
        <Grid.Row>
          <Grid.Column>
            <BreadcrumbLinks icon='right angle' sections={ sections } />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Breadcrumb;
