// Global components.
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

// Custom components.
import Breadcrumb from './global/Breadcrumb';
import Header from './global/Header';
import Footer from './global/Footer';

// Pages.
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Site from '../pages/site/Site';

// Redux.
import { connect } from 'react-redux';
import { getSitesList } from '../actions/sitesActions';

// URL paths.
import { HOME, LOGIN, REGISTER, SITE } from '../config/paths';

// Styles.
import '../styles/components/App.scss';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getSitesList());
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Segment className="App__breadcrumb" vertical>
          <Breadcrumb />
        </Segment>
        <Segment className="App__container" vertical>
          <Switch>
            <Route path={ HOME } exact component={ Home } />
            <Route path={ LOGIN } exact component={ Login } />
            <Route path={ REGISTER } exact component={ Register } />
            <Route path={ `${ SITE }/:siteId` } component={ Site } />
          </Switch>
        </Segment>
        <Segment className="App__footer" vertical>
          <Footer />
        </Segment>
      </div>
    );
  }
}

export default withRouter(connect()(App));
