import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../api/API";
import "./SearchRes.css";

class SearchRes extends Component {
  state = {
    search: "National Parks",
    results: []
  };

  componentDidMount() {
    this.searchBook("National Parks");
  }

  searchBook = (keywords) => {
    API.search(keywords)
      .then(res => this.setState({ results: res.data.items}))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

   handleFormSubmit = event => {
    event.preventDefault();
    this.searchBook(this.state.search);
    this.setState({search:""})
  };

  addBook=(book)=>{
    API
    .saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      pages: book.volumeInfo.pageCount,
      info: book.volumeInfo.infoLink
    })
    .then(alert("That book was saved to the list"))
    .catch(err=>console.log(err))
  };

  render() {
    return (
      <div className="cardPage">
        <SearchForm
          value={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <div className="cardContainer">
            {this.state.results.map(result => (
              <div className="uk-card uk-card-small uk-card-hover uk-width-5-6" id="bookcard" key={result.id}>
                <div>
                  <img alt="OOPS...no pic available" src={result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.thumbnail:"x"}/>
                  <h3 className="uk-card-title">{result.volumeInfo.title}</h3>
                  <p className="uk-article-meta">Written by {result.volumeInfo.authors?result.volumeInfo.authors:"Unknown"} in {result.volumeInfo.pageCount} pages</p>
                  <p className="uk-card-body">{result.volumeInfo.description}</p>
                  <a href={result.volumeInfo.infoLink} className="uk-button uk-button-default uk-button-small">Details</a>
                  <button onClick={()=>this.addBook(result)} className="uk-button uk-button-default uk-button-small">Save</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default SearchRes;
