// Global components.
import React, { Component } from 'react';
import { Button, Card, Divider, Form, Input } from 'semantic-ui-react';

// Redux.
import { connect } from 'react-redux';

// Styles.
import '../../styles/pages/site/SiteDomains.scss';

class SiteDomains extends Component {
  render() {
    //const { siteId } = this.props;

    return (
      <div className="Site-domains">
        <p>Add a domain to your site. You can add multiple domains to the same site.</p>
        <Form>
          <Form.Field>
            <Input
              placeholder="Domain Name"
              value=""
              label='http://'
              action={{ labelPosition: 'right', icon: 'plus', content: 'Add' }}
            />
          </Form.Field>
        </Form>
        <Divider horizontal>Domains</Divider>
        <Card.Group className="Site-status">
          <Card fluid color="pink">
            <Card.Content>
              <Card.Description>
                domain-name.com
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button basic color="pink" content="Remove" icon="remove" />
            </Card.Content>
          </Card>
          <Card fluid color="pink">
            <Card.Content>
              <Card.Description>
                domain-name-1.com
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button basic color="pink" content="Remove" icon="remove" />
            </Card.Content>
          </Card>
          <Card fluid color="pink">
            <Card.Content>
              <Card.Description>
                domain-name-2.com
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button basic color="pink" content="Remove" icon="remove" />
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  siteId: state.siteId.value,
});

export default connect(mapStateToProps)(SiteDomains);
