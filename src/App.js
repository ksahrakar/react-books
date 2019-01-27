import React, { Component } from 'react';
import './App.css';
import SearchRes from "./Components/SearchRes";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchRes />
        </header>
      </div>
    );
  }
}

export default App;
