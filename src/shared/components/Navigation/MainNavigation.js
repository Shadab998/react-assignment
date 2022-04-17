import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';

import './MainNavigation.css';

const MainNavigation = props => {

  var className = props.className;
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  var content = null;
  if (className === "browser"){
    content = <><button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
      <span />
      <span />
      <span />
    </button><h1 className="main-navigation__title">
    <Link to="/"><p style={{display:"inline-block"}}>Mentor</p><p style={{color:"#db1b45",display:"inline-block"}}>Plus</p></Link>
      </h1></>
  } else {
    content = <><h1 className="main-navigation__title">
      <Link to="/"><p style={{display:"inline-block"}}>Mentor</p><p style={{color:"#db1b45",display:"inline-block"}}>Plus</p></Link>
    </h1><button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
    <span />
    <span />
    <span />
  </button></>
  }
  
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <BrowserView>
      <MainHeader className = {className}>
        {content}
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
      </BrowserView>
      <MobileView>
      <MainHeader className = {className}>
        {content}
        
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
      </MobileView>
    </React.Fragment>
  );
};

export default MainNavigation;
