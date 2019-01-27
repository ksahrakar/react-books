import React, { Component } from 'react';
import './App.css';
import SearchRes from "./Components/SearchRes";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          The Top 20 GoogleBooks Hits
          <button id="bookbutton" className="uk-button uk-button-default">Saved Books</button>
          <button id="searchbutton" className="uk-button uk-button-default">Search</button>
        </header>
        <body>
          <SearchRes />
        </body>
      </div>
    );
  }
}

export default App;
