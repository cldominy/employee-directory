import React, {Component} from "react"
import API from "../utils/API"
import Table from "../components/Table"
import Header from "../components/Header"
import Filter from "../components/Filter"
import Container from "../components/Container"

class Home extends Component {
    state = {
        employees: [],
        search: ""
    }
    componentDidMount(){
        API.getRandomPeople().then(response => {
            this.setState({
                employees: response.data.results
            })
        })
    }

searchChange = (event) => {
    this.setState({ search: event.target.value })
}

firstAsc = () => {
    const sortedEmployees = this.state.employees.sort((a, b) =>
      a.name.first.localeCompare(b.name.first)
    );
    this.setState({ employees: sortedEmployees });
  };

  firstDesc = () => {
    const sortedEmployees = this.state.employees.sort((a, b) =>
      b.name.first.localeCompare(a.name.first)
    );
    this.setState({ employees: sortedEmployees });
  };

  lastAsc = () => {
    const sortedEmployees = this.state.employees.sort((a, b) =>
      a.name.last.localeCompare(b.name.last)
    );
    this.setState({ employees: sortedEmployees });
  };

  lastDesc = () => {
    const sortedEmployees = this.state.employees.sort((a, b) =>
      b.name.last.localeCompare(a.name.last)
    );
    this.setState({ employees: sortedEmployees });
  };

     render (){
        const { employees, search } = this.state;
        const filteredUsers = employees.filter((employees) =>
        employees.name.last.toLowerCase().includes(search.toLowerCase())
      );
         return (
             <>
             <Container>
             <Header
              searchChange={this.searchChange}></Header>
              <Filter
              firstAsc={this.firstAsc}
              firstDesc={this.firstDesc}
              lastAsc={this.lastAsc}
              lastDesc={this.lastDesc}
              ></Filter>
                <Table employees={filteredUsers}/>
                </Container>
             </>
            
         )
     }
}

export default Home