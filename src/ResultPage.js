import React from 'react';

function delayedLoop(iterations, delay, callback) {
  if (iterations === 0) {
    return;
  } else {
    setTimeout(() => {
      callback();
      delayedLoop(iterations - 1, delay, callback);
    }, delay);
  }
}

export default class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoPercentage: 0,
    };
  }

  componentDidMount() {
    const randomNumber = Math.round(Math.random() * 100);
    /*for (let i = 0; i <= randomNumber; i++) {
      
    }*/
    let i = 0;
    setTimeout(() => {
      delayedLoop(randomNumber, 50, () => {
        i++;
        this.setState({
          infoPercentage: i,
        });
      });
    }, 800);
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
