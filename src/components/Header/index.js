import React from "react";
import Search from "../Search";

function Header({ searchChange }) {
    return (
    <header>
  
  <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Employee Directory</h1>
    <p className="lead">Filter for an employee by last name or sort through employees by alpha</p>
    <Search 
    searchChange={searchChange}
    ></Search>
  </div>
</div>
 
  </header>
  )
}

export default Header;
