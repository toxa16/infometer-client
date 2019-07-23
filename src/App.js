import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';
import Homepage from './Homepage';
import TermsOfService from './TermsOfService';
import ResultPage from './ResultPage';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 'homepage',
    };
  }

  handleBrandClick() {
    this.setState({
      page: 'homepage',
    });
  }

  handleTosClick() {
    this.setState({
      page: 'tos',
    });
  }

  render() {
    return (
      <article className="h-100 d-flex flex-column justify-content-between">
        <Nav onBrandClick={ this.handleBrandClick.bind(this) } />

        <main className="container">
          <div className="row text-center">
            <div className="col-12 col-md-10 col-lg-8 mx-auto">

            { this.state.page === 'homepage' && <Homepage /> }
            { this.state.page === 'tos' && <TermsOfService /> }

            </div>
          </div>
        </main>

        <div className="clearfix"></div>

        <Footer onTosClick={ this.handleTosClick.bind(this) } />
      </article>
    );
  }
}
