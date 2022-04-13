import React from 'react';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation/>
        <div className='main'>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        </div>
    </Router>

  );
};

export default App;
