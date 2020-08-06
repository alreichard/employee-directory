import React, { Component } from "react";
import EmployeeCard from "./components/employee";
// import Wrapper from "./components/Wrapper";
import employees from "./employees.json";
import AlphaButton from "./components/alphabetButton"
import NumButton from "./components/numberButton"
import Search from "./components/searchbar"
import Wrapper from "./components/wrapper"





// State should live in App.js
// Delete function

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees,
    employeesFilter: employees,
    bool: false,
    boolNum: false
  };

  sortName = () => {
     
    let sortNames = this.state.employeesFilter.sort((a, b) => {
      console.log(a)
      console.log(b.name)
     let comparison = 0;
      if ( a.name > b.name) {
        comparison = 1;
      } else if ( a.name < b.name) {
        comparison = -1;
      } return comparison
    })

    if (this.state.bool) {
      sortNames.reverse();
      this.setState({bool: false})
     } else {this.setState({bool:true})
    } 
    
    this.setState({employeesFilter: sortNames})
  }

  sortNumber = () => {
     
    let sortNumbers = this.state.employeesFilter.sort((a, b) => {
      
     let comparison = 0;
      if ( a.price > b.price) {
        comparison = 1;
      } else if ( a.price < b.price) {
        comparison = -1;
      } return comparison
    })

    if (this.state.boolNum) {
      sortNumbers.reverse();
      this.setState({boolNum: false})
     } else {this.setState({boolNum:true})
    } 
    
    this.setState({employeesFilter: sortNumbers})
  } 
  findEmployee = event => {
   
    const searchEmployees = this.state.employees.filter(employee => employee.name.toLowerCase().includes(event.target.value.toLowerCase()))
    this.setState({ employeesFilter: searchEmployees });
  };
  
  render() {
    return (
      <>
       <Wrapper>
        <AlphaButton sortName = {this.sortName} />
        <NumButton sortNumber = {this.sortNumber} />
        
          <Search findEmployee = {this.findEmployee}/>
          </Wrapper>
          <div class="row">
          {this.state.employeesFilter.map(employee =>
            <EmployeeCard
              image={employee.image}
              name={employee.name}
              price={employee.price}
              seller={employee.seller}
              birth={employee.birth}

            />
            
          )}
          </div>
        
      </>
    );
  }
}

export default App;
