import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      <h2>- Beer On Tap -</h2>
      {props.kegList.map((keg) =>
        <Keg
          whenKegClicked={props.onKegSelection}
          brand={keg.brand} name={keg.name}
          content={keg.content}
          price={keg.price}
          quantity={keg.quantity}
          id={keg.id}
          key={keg.id} />
      )}
      {/* <button onClick={this.handleDecrementClick}>-</button> */}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  // handleDecrementClick: PropTypes.func
};

export default KegList;