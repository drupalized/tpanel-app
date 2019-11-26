// Global components.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import striptags from 'striptags';

// Redux.
import { connect } from 'react-redux';
import { updateSiteId } from '../../actions/sitesActions';

// Config.
import { SITE } from '../../config/paths';

class SitesView extends Component {
  render() {
    const { sites, updateSiteId } = this.props;

    if (sites.length === 0) {
      return (
        <div>
          Oh! No sites were found... There are currently no sites under your account. It's time to create your first site! Click here to create your first site.
        </div>
      );
    }

    return (
      <Card.Group itemsPerRow={ 4 } stackable doubling>
        { sites.length !== 0 && sites.map((site, index) => {
          return (
            <Card
              key={ site.uuid[0].value }
              as={ Link }
              to={ `${ SITE }/${ site.uuid[0].value }#info` }
              color="pink"
              onClick={ () => updateSiteId(site.uuid[0].value) }
            >
              <Image src={ site.field_site_image[0].url } wrapped ui={false} />
              <Card.Content>
                <Card.Header>{ site.name[0].value }</Card.Header>
                <Card.Meta>
                  <span>Trial expires on xx-xx-xxxx</span>
                </Card.Meta>
                <Card.Description>
                  { striptags(site.description[0].value) }
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <span href={ `https://site${ index + 1 }.tipickly.com` }>
                  <Icon name="linkify" />
                  https://site{ index + 1 }.tipickly.com
                </span>
              </Card.Content>
            </Card>
          )
        })}
      </Card.Group>
    );
  }
}

const mapStateToProps = state => {
  return {
    sites: state.sites.items,
    loading: state.sites.loading,
    error: state.sites.error
  }
};

const mapDispatchToProps = dispatch => ({
  updateSiteId: siteId => dispatch(updateSiteId(siteId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SitesView);
