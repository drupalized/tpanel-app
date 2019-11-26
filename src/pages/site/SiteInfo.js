// Global components.
import React, { Component } from 'react';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';

// Redux.
import { connect } from 'react-redux';

// Styles.
import '../../styles/pages/site/SiteInfo.scss';

class SiteInfo extends Component {
  state = { siteName: 'New site 1', siteDescription: 'Lorem Ipsum' };

  handleInputChange = fieldName => e => {
    this.setState({ [fieldName]: e.target.value.replace(/  +/g, ' ') });
  };

  render() {
    const { siteId } = this.props;

    return (
      <div className="Site-info">
        <Form>
          <Form.Field>
            <label>Site ID</label>
            <Input
              value={ siteId }
              icon="code"
              iconPosition="left"
              disabled
            />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Site Name</label>
              <Input
                placeholder="Site Name"
                value={ this.state.siteName }
                icon="file outline"
                iconPosition="left"
                onChange={ this.handleInputChange('siteName') }
              />
            </Form.Field>
            <Form.Field>
              <label>Site URL</label>
              <Input
                placeholder="Site URL"
                value={ this.state.siteName.replace(/ /g, '-').toLowerCase() }
                label=".tipickly.com"
                labelPosition="right"
                icon="globe"
                iconPosition="left"
                disabled
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Site Description</label>
            <TextArea
              placeholder="Site Description"
              value={ this.state.siteDescription }
              onChange={ this.handleInputChange('siteDescription') }
            />
          </Form.Field>
          <Form.Field>
            <Button basic color="pink" type="submit" size="large">Save Changes</Button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  siteId: state.siteId.value,
});

export default connect(mapStateToProps)(SiteInfo);
