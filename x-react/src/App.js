import React from 'react';
import CardList from './components/CardList';
import {robots} from './bots/robots.js';


const App = () => {
  
  return (
    <div className="App">
      <CardList robots={robots}/>
    </div>
  );
}

export default App;
