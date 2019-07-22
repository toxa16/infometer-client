import React from 'react';
import { Link } from 'react-router-dom';

export default class ResultPage extends React.Component {
  render() {
    return (
      <div>
        <p className="h3">Your info is</p>
        <p className="font-weight-bold text-info display-1">19%</p>
        <p className="text-muted pb-5">"Kate loves me"</p>
        <div>
          <Link className="text-info" to="/">Try another info</Link>
        </div>
      </div>
    );
  }
}
