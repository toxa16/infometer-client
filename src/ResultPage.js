import React from 'react';

export default class ResultPage extends React.Component {
  componentDidMount() {
    console.log(this.props.q);
  }

  handleBackClick(event) {
    event.preventDefault();
    this.props.onBackClick();
  }

  render() {
    return (
      <div>
        <p className="h3">Your info is</p>
        <p className="font-weight-bold text-info display-1">19%</p>
        <p className="text-muted pb-5">"Kate loves me"</p>
        <div>
          <a className="text-info" href="/"
              onClick={ this.handleBackClick.bind(this) }>Try another info</a>
        </div>
      </div>
    );
  }
}
