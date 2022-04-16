import React, { useState, useEffect }  from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import HomePage from './home/pages/HomePage';
import Profile from './profile/pages/Profile';

import MainNavigation from './shared/components/Navigation/MainNavigation';

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}


const App = () => {

  var className = "browser";
  var classNameBody = "main-browser"

  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 50)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    
}
  })

  if(dimensions.width < 768){
    className = "mobile"
    classNameBody = "main-mobile"
  }
  else{
    className = "browser"
    classNameBody = "main-browser"
  }

  

  return (
    <Router>
      <MainNavigation className={className}/>
        <div className={classNameBody}>
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Redirect to="/" />
        </Switch>
        </div>
    </Router>

  );
};

export default App;
