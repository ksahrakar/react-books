import React, { Component } from 'react';

class NavBar extends Component {
    render() {
      return (
          <div className="NavBar">
            <header className="App-header">
              The Top 10 GoogleBooks for ...
              <a href="/Saved "id="bookbutton" className="uk-button uk-button-default">Saved Books</a>
              <a href="/" id="searchbutton" className="uk-button uk-button-default">Home</a>
            </header>
          </div>
        
      );
    }
  }
  
  export default NavBar;