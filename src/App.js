import React from 'react';

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
      q: '',
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

  handleSubmit(q) {
    this.setState({
      page: 'result-page',
      q,
    });
  }

  handleBackClick() {
    this.setState({
      page: 'homepage',
    });
  }

  render() {
    return (
      <article className="h-100 d-flex flex-column justify-content-between">
        <Nav onBrandClick={ this.handleBrandClick.bind(this) } />

        <main className="container py-3">
          <div className="row text-center">
            <div className="col-12 col-md-10 col-lg-8 mx-auto">

            { this.state.page === 'homepage' && 
                <Homepage onSubmit={ this.handleSubmit.bind(this) } /> }
            { this.state.page === 'result-page' &&
                <ResultPage q={ this.state.q } onBackClick={ this.handleBackClick.bind(this) } /> }
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
