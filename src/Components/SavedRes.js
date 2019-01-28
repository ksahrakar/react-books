import React, { Component } from "react";
import API from "../api/API";

class SavedRes extends Component{
    state = {
        results:[]
    };

    componentDidMount(){
        this.savedBks()
    };

    savedBks = () =>{
        API
            .getBooks()
            .then(result=>this.setState({results:result.data}))
            .catch(error => console.log (error))
    };

    deleteBook = (BkID)=>{
        API
            .deleteBook(BkID)
            .then(result => this.savedBks())
            .catch(error =>console.log(error))
    };
    
    render(){
        return(
            <div className="cardContainer">
            {this.state.results.map(result => (
              <div className="uk-card uk-card-small uk-card-hover uk-width-5-6" id="bookcard" key={result._id}>
                <div>
                  <img alt="OOPS...no pic available" src={result.image ? result.image:"x"}/>
                  <h3 className="uk-card-title">{result.title}</h3>
                  <p className="uk-article-meta">Written by {result.authors?result.authors:"Unknown"} in {result.pages} pages</p>
                  <p className="uk-card-body">{result.description}</p>
                  <a href={result.info} className="uk-button uk-button-default uk-button-small">Details</a>
                  <button onClick={()=>this.deleteBook(result._id)} className="uk-button uk-button-default uk-button-small">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )
    }

}

export default SavedRes;