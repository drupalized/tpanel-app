// Global components.
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

// Custom components.
import Header from './global/Header';
import Footer from './global/Footer';

// Pages.
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Site from '../pages/site/Site';

// Redux.
import { connect } from 'react-redux';
import { getSitesList } from '../actions/sitesActions';

// URL paths.
import { HOME, LOGIN, SITE } from '../config/paths';

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
          <Switch>
            <Route path={ HOME } exact component={ Home } />
            <Route path={ LOGIN } exact component={ Login } />
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
