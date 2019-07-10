// Global components.
import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

// Styles.
import '../../styles/components/global/Search.scss'

class Search extends Component {
  render() {
    return (
      <Form className="Search" container stackable>
        <Form.Field>
          <Input
            fluid
            list="sites"
            size="big"
            action={{ labelPosition: 'right', icon: 'search', content: 'Search' }}
            placeholder="Search for a website..."
          />
          <datalist id="sites">
            <option value="Site 1" />
            <option value="Site 2" />
            <option value="Site 3" />
            <option value="Site 4" />
            <option value="Site 5" />
            <option value="Site 6" />
          </datalist>
        </Form.Field>
      </Form>
    );
  }
}

export default Search;
