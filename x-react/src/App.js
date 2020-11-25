import React, { Component } from 'react';
import CardList from './components/CardList';
import {robots} from './bots/robots.js';
import SearchBar from './components/SearchBar'


class App extends Component {
  state = { 
    robots: robots,
    searchfield: ''
  }

  onSearchChange = (event) => {
  
    this.setState({ searchfield: event.target.value })

    
  }
  render (){

    const filterBots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return (
      <div className="App tc">
        <SearchBar onSearchChange={this.onSearchChange}/>
        <CardList robots={filterBots}/>
      </div>
    );
  }
}

export default App;
