import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResList from "./ResList";
import API from "../api/API";

class SearchRes extends Component {
  state = {
    search: "React",
    results: []
  };

  componentDidMount() {
    this.searchBook("National Parks");
  }

  searchBook = (keywords) => {
    API.search(keywords)
      .then(res => this.setState({ results: res.data.items }))
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
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResList results={this.state.results} />
      </div>
    );
  }
}

export default SearchRes;
