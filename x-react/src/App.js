import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import Scroll from './components/Scroll'
import './index.css'


class App extends Component {

  state = { 
    robots: [],
    searchfield: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(robots => this.setState({ robots: robots }))
  };

  onSearchChange = (event) => this.setState({ searchfield: event.target.value })



  render (){

    const filterBots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });
    
    return ( 
      
      this.state.robots.length === 0 ? 

      <h1>Loading...</h1> :

      <div className="App tc">
        <SearchBar onSearchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filterBots}/>
        </Scroll>
      </div>
      
    );
  }
}

export default App;
