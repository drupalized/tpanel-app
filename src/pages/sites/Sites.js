// Global components.
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
//import * as Url from 'url';

// Custom components.
import LeftMenu from '../../components/global/LeftMenu';
import Search from '../../components/global/Search';

// Styles.
import '../../styles/pages/sites/Sites.scss';

class Sites extends Component {
  render() {
    //console.log(Url.parse(window.location.href));
    return (
      <Grid className="Sites" container stackable>
        <Grid.Row>
          <Grid.Column><Search /></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={ 4 }>
            <LeftMenu />
          </Grid.Column>
          <Grid.Column className="Sites-register" width={ 12 }>
            Test
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Sites;
