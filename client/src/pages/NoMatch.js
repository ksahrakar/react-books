import React, { Component } from "react";
import "./NoMatch.css";

class NoMatch extends Component {
    render() {
        return (
            <div className="container">
                <h1 id="noMatch">
                    <p>404 Error...</p>
                    <p>BLUE SCREEN BABY!</p>
                    <p>Yeah- can't reach that route...</p>
                    <p>Simple as that...</p>
                </h1>
            </div>
        )
    }
}

export default NoMatch;