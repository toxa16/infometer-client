import React from 'react';

export default class Footer extends React.Component {
  handleTosClick(event) {
    event.preventDefault();
    this.props.onTosClick();
  }

  render() {
    return (
      <footer className="container d-flex flex-wrap justify-content-between pb-2">
        <a className="text-info text-nowrap pr-3" href="/terms-of-service"
            onClick={ this.handleTosClick.bind(this) }>Terms of Service</a>
        <span className="text-secondary text-nowrap">© 2019 Anton Bahurinsky</span>
      </footer>
    );
  }
}
