import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="container d-flex flex-wrap justify-content-between pb-2">
      <Link className="text-info text-nowrap pr-3" to="/terms-of-service">
        Terms of Service
      </Link>
      <span className="text-secondary text-nowrap">© 2019 Anton Bahurinsky</span>
    </footer>
  );
}
