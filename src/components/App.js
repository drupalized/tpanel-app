// Global components.
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

// Custom components.
import Header from './global/Header';
import Search from './global/Search';

// Pages.
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';

// Redux.
import { connect } from 'react-redux';
import { getSitesList } from '../actions/sitesActions';

// URL paths.
import { HOME, LOGIN } from '../config/paths';

// Styles.
import '../styles/components/App.scss';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getSitesList());
  }

  render() {
    //const { history, location } = this.props;

    return (
      <div className="App">
        <Header />
        <Segment className="App__container" vertical>
          <Search />
          <Switch>
            <Route path={ HOME } exact component={ Home } />
            <Route path={ LOGIN } exact component={ Login } />
          </Switch>
        </Segment>
      </div>
    );
  }
}

export default withRouter(connect()(App));
