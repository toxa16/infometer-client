import React from 'react';

export default class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoPercentage: null,
    };
  }

  componentDidMount() {
    const randomNumber = Math.round(Math.random() * 100);
    this.setState({
      infoPercentage: randomNumber,
    });
  }

  handleBackClick(event) {
    event.preventDefault();
    this.props.onBackClick();
  }

  render() {
    return (
      <div>
        <p className="h3">Your info is</p>
        <p className="font-weight-bold text-info display-1">
          { this.state.infoPercentage }%
        </p>
        <p className="text-muted pb-5">"{ this.props.q }"</p>
        <div>
          <a className="text-info" href="/"
              onClick={ this.handleBackClick.bind(this) }>Try another info</a>
        </div>
      </div>
    );
  }
}
