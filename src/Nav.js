import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">InfoMeter</Link>
        <a className="text-info" href="#"><i className="fab fa-twitter"></i></a>
      </div>
    </nav>
  );
}
