import React from 'react';
import BeerHeader from './../img/BeerHeader.jpeg';

function Header() {
  return (
    <React.Fragment>
      <img src={BeerHeader} alt="beer"></img>
      <hr></hr>
      <h1>Tap-Room:</h1>
      <h3>Bring on the Beer</h3>
    </React.Fragment>
  );
}

export default Header;