import React from 'react';
import PropTypes from 'prop-types';

function KegDetails(props) {
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1> Keg Details:</h1>
      <h3>{keg.name}: {keg.brand} ({keg.content})</h3>
      <h2>{keg.price}</h2>
      <button onClick={props.onClickingEdit}> Edit Keg</button>
      <button onClick={() => onClickingDelete(keg.id)}> Delete Keg</button>
      <hr />
    </React.Fragment>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetails;