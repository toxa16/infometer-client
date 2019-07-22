import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';
import Homepage from './Homepage';

export default class App extends React.Component {
  render() {
    return (
      <Router>
      <article className="h-100 d-flex flex-column justify-content-between">
        <Nav />

        <main className="container">
          <div className="row text-center">
            <div className="col-12 col-md-10 col-lg-8 mx-auto">

            <Route exact path="/" component={ Homepage } />

            </div>
          </div>
        </main>

        <div className="clearfix"></div>

        <Footer />
      </article>
      </Router>
    );
  }
}
