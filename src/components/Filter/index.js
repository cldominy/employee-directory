import React from "react"
import Row from "../Row";
import Col from "../Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaUp, faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'

function Filter({ firstAsc, firstDesc, lastAsc, lastDesc }) {
    return (
        <Row style={{ textAlign: "center", marginBottom: 25 }}>
      <Col size="md-3">
          <button onClick={firstAsc} type="button" className="btn btn-success primary"><FontAwesomeIcon icon={faSortAlphaUp}/> First Name</button>
          </Col>
          <Col size="md-3">
          <button onClick={firstDesc} type="button" className="btn btn-danger large"><FontAwesomeIcon icon={faSortAlphaDown}/> First Name</button>
          </Col>
          <Col size="md-3">
          <button onClick={lastAsc} type="button" className="btn btn-success large"><FontAwesomeIcon icon={faSortAlphaUp}/> Last Name</button>
          </Col>
          <Col size="md-3">
          <button onClick={lastDesc} type="button" className="btn btn-danger large"><FontAwesomeIcon icon={faSortAlphaDown}/> Last Name</button>
          </Col>
          </Row>
    );
  }
  
  export default Filter;