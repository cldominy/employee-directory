import React from "react"
import Row from "../Row";
import Col from "../Col";

function Table ({employees}) {
    return (
        <Row>
             <Col size="md-12">
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Picture</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {employees.length > 0? employees.map(person =>{
        return (
            <tr key={person.login.uuid}>
            <th scope="row"><img src={person.picture.thumbnail} alt="Employee Thumbnail"/></th>
        <td>{person.name.first}</td>
            <td>{person.name.last}</td>
            <td>{person.phone}</td>
            <td>{person.email}</td>
          </tr>
        )
    }):(
  <tr>
  <th scope="row">1</th>
  <td>Mark</td>
  <td>Otto</td>
  <td>@mdo</td>
  <td>@mdo</td>
</tr>
    )}

  
    
  </tbody>
</table>
</Col>
</Row>
    )
}

export default Table