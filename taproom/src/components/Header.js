import React from 'react';
import BeerHeader from './../img/BeerHeader.jpeg';

function Header() {
  return (
    <React.Fragment>
      <div id="padding">
        <img src={BeerHeader} alt="beer"></img>
      </div>
      <div id="title">
        <hr></hr>
        <h1>Tap-Room:</h1>
      </div>
      <h3>Bring on the Beer</h3>
    </React.Fragment>
  );
}

export default Header;