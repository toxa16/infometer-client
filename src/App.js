import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <article className="h-100 d-flex flex-column justify-content-between">
        <Nav />

        <main className="container">
          <div className="row text-center">
            <div className="col-12 col-md-10 col-lg-8 mx-auto">

              <h1 className="font-weight-bold text-info">InfoMeter</h1>
              <p>Check your info now!</p>
              <form action="#">
                <div className="form-group">
                  <input className="form-control form-control-lg" type="text"
                      name="q" placeholder="e.g. &quot;Kate loves me&quot;" />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-info btn-lg">Check</button>
                </div>
              </form>

            </div>
          </div>
        </main>

        <div className="clearfix"></div>

        <Footer />
      </article>
    );
  }
}
