// Global components.
import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

// Redux.
import { connect } from 'react-redux';

// Styles.
import '../../styles/pages/site/SiteStatus.scss';

class SiteStatus extends Component {
  render() {
    //const { siteId } = this.props;

    return (
      <Card.Group className="Site-status">
        <Card fluid color="green" header="Success" description="Description of the success" />
        <Card fluid color="yellow" header="Warning" description="Description of the warning" />
        <Card fluid color="red" header="Error" description="Description of the error" />
      </Card.Group>
    );
  }
}

const mapStateToProps = state => ({
  siteId: state.siteId.value,
});

export default connect(mapStateToProps)(SiteStatus);
