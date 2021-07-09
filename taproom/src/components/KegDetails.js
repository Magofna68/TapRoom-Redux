import React from 'react';
import PropTypes from 'prop-types';

function KegDetails(props) {
  const { keg, onClickingDelete, onClickDecrement } = props;

  return (
    <React.Fragment>
      <h2> Keg Details:</h2>
      <h3>{keg.brand}: <br></br>{keg.name} ({keg.content})</h3>
      <h2>{keg.price}</h2>
      <h4>Remainder: {keg.quantity}</h4>
      <button onClick={props.onClickingEdit}> Edit Keg</button>
      <button onClick={() => onClickingDelete(keg.id)}> Delete Keg</button>
      <button onClick={() => onClickDecrement(keg.id)}>-</button>
      <hr />
    </React.Fragment>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickDecrement: PropTypes.func
};

export default KegDetails;