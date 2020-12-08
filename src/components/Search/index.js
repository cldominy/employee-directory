import React from "react"
import Row from "../Row";
import Col from "../Col";

function Search ({ searchChange }){
    return (
        <Row>
            <Col size="md-6">
        <input className="form-control mr-sm-2" type="search" placeholder="Search by last name" aria-label="Search" onChange={searchChange}/>
        </Col>
        </Row>
    )
}

export default Search