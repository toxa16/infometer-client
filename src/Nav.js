import React from 'react';

export default class Nav extends React.Component {
  handleBrandClick(event) {
    event.preventDefault();
    this.props.onBrandClick();
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/"
              onClick={ this.handleBrandClick.bind(this) }>InfoMeter</a>
          <a className="text-info" href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </nav>
    );
  }
}
