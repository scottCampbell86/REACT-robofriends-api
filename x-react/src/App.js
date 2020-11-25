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
    console.log(event);
  }
  render (){

    return (
      <div className="App tc">
        <SearchBar onSearchChange={this.onSearchChange}/>
        <CardList robots={this.state.robots}/>
      </div>
    );
  }
}

export default App;
