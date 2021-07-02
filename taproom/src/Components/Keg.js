import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.brand}:</h3>
        <h2>{props.name}</h2>
        <p>Alcohol content: {props.content} <br></br></p>
        <h2>{props.price}</h2>
        <p>{props.quantity} Pints Remaining</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: 124,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;