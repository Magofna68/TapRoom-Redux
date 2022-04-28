import React from 'react';
import BeerHeader from './../img/BeerHeader.jpeg';

function Header() {
  return (
    <React.Fragment>
      <img  width="auto" height="auto" src={BeerHeader} alt="beer"></img>
      <hr></hr>
      <h1>Tap-Room:</h1>
      <h3>It's 5 o'clock somewhere..</h3>
    </React.Fragment>
  );
}

export default Header;