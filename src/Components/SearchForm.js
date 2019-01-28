import React from "react";
import "./SearchForm.css";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label className="searchLabel" htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="uk-input uk-width-1-2"
          placeholder="Search for a Book"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="uk-button uk-button-default">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
