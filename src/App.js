import React, { Component } from "react";
import {CardList} from './components/card-list/card-list'
import {SearchBox} from './components/search-box/search-box'

import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters:[],
      searchText:""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      this.setState({monsters : users})
    })
  }

  handleChange = name => this.setState({searchText:name})
  
  render(){
    const { monsters , searchText } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchText.toLowerCase()))
    return(
    <div className="App">
      <SearchBox placeholder="search monster" handleChange={this.handleChange} />
      <CardList monsters={filteredMonsters} />      
    </div>)
  }
}
export default App;
