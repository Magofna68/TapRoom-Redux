import React from 'react';
import PropTypes from 'prop-types';

function KegDetails(props) {
  const { keg, onClickingDelete, onClickingDecrement } = props;

  return (
    <React.Fragment>
      <h1> <ul>Keg Details:</ul></h1>
      <h3>{keg.brand}: <br></br>{keg.name} ({keg.content})</h3>
      <h2>{keg.price}</h2>
      <h4>Remainder: {keg.quantity}</h4>
      <button onClick={props.onClickingEdit}> Edit Keg</button>
      <button onClick={() => onClickingDelete(keg.id)}> Delete Keg</button>
      <button onClick={() => onClickingDecrement(keg.quantity)}>- Pint</button>
      <hr />
    </React.Fragment>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDecrement: PropTypes.func
};

export default KegDetails;