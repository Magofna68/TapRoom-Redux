import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditKeg(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg(
      {
        name: event.target.name.value,
        brand: event.target.brand.value,
        content: event.target.content.value,
        price: event.target.price.value,
        quantity: event.target.quantity.value,
        id: keg.id
      })
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKeg.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EditKeg;