"use strict"

import React 							from 'react';
import Reflux 						from 'reflux';
import Actions 						from 'appRoot/actions';
import SessionStore				from 'appRoot/stores/sessionContext';
import { Link, History }  from 'react-router';

export default React.createClass({
  mixins: [
    Reflux.connect(SesssionStore, 'session'),
    History
  ],
  logOut: function () {
    Actions.logOut();
    this.history.pushState('', '/');
  },
  render: function () {
    return (
      <header className="app-header">
        <Link to="/"><h1>ReAction</h1></Link>
        <section className="account-ctrl">
          {
            this.state.session.loggedIn ?
              (<Link to="/posts/create">
                Hello {this.state.session.username}, write something!
              </Link>) :
              <Link to="/users/create">Join</Link>
          }
          {
            this.state.session.loggedIn ?
              <a onClick={this.logOut}>Log Out</a> :
              <Link to="/login">Log in</Link>
          }
        </section>
      </header>
    );
  }
});
