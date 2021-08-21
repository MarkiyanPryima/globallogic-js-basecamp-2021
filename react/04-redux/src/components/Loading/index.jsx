import React from 'react';
import { useSelector } from 'react-redux';

import logo from './logo.svg';
import './styles.scss';

function Loading() {
  const requestsCount = useSelector(state => state.loading);

  if (requestsCount === 0) {
    return null;
  }

  return (
    <div>
      <div className="Loading">
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div className="overlay" />
    </div>
  );
}

export default Loading;
