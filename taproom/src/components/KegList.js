import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function KegList(props) {
  return (
    <React.Fragment>
      {/* <div id="container"> */}
      <hr />
      <h2>- Beer On Tap -</h2>
      <Container fluid>
        <Row>
        <Col>
      {Object.values(props.kegList).map((keg) =>
        <Keg
          whenKegClicked={props.onKegSelection}
          brand={keg.brand} name={keg.name}
          content={keg.content}
          price={keg.price}
          quantity={keg.quantity}
          formattedWaitTime={keg.formattedWaitTime}
          id={keg.id}
          key={keg.id} />
      )}
      </Col>
      </Row>
      </Container>
      {/* </div> */}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
};

export default KegList;