// Global components.
import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import striptags from 'striptags';

// Redux.
import { connect } from 'react-redux';

// History.
import history from '../../config/history';

// Config.
import { SITE } from '../../config/paths';

class SitesView extends Component {
  goToSitePage = siteId => {
    history.push( `${ SITE }/${ siteId }#info` );
  }

  render() {
    const { sites } = this.props;

    if (sites.length === 0) {
      return (
        <div>
          Oh! No sites were found... There are currently no sites under your account. It's time to create your first site! Click here to create your first site.
        </div>
      );
    }

    return (
      <Card.Group itemsPerRow={ 4 } stackable>
        { sites.length !== 0 && sites.map((site, index) => {
          console.log(site);
          return (
            <Card color="pink" key={ site.uuid[0].value } onClick={ () => this.goToSitePage(site.uuid[0].value) } as="div">
              <Image src={ site.field_site_image[0].url } wrapped ui={false} />
              <Card.Content>
                <Card.Header>{ site.name[0].value }</Card.Header>
                <Card.Meta>
                  <span>Trial expires at xx-xx-xxxx</span>
                </Card.Meta>
                <Card.Description>
                  { striptags(site.description[0].value) }
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href={ `https://site${ index + 1 }.tipickly.com` } color="pink">
                  <Icon name="linkify" />
                  https://site{ index + 1 }.tipickly.com
                </a>
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

export default connect(mapStateToProps)(SitesView);
