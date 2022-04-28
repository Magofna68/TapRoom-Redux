import React from 'react';
import PropTypes from 'prop-types';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';



function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
      <Card style = {{width: '14rem' }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle>{props.brand}</Card.Subtitle>
          <Card.Text>{props.price}<br/> {props.quantity} Pints Remaining</Card.Text>
            {/* <h3>{props.brand}:<br/> */}
            {/* {props.name}</h3> */}
            {/* <p>Alcohol content: {props.content}</p> */}
            {/* <h2>{props.price}</h2>
            <p>{props.quantity}<br/> Pints Remaining</p> */}
      </Card.Body>
      </Card>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;