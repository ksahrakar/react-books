import React from "react";
import "./ResList.css";

function ResList(props) {
  return (
    <div className="cardContainer">
      {props.results.map(result => (
        <div className="uk-card uk-card-small uk-card-hover uk-width-5-6" id="bookcard" key={result.id}>
          <div>
            <img alt="pic" src={result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.thumbnail:"x"}/>
            <h3 className="uk-card-title">{result.volumeInfo.title}</h3>
            <p className="uk-article-meta">Written by {result.volumeInfo.authors?result.volumeInfo.authors:"Unknown"} in {result.volumeInfo.pageCount} pages</p>
            <p className="uk-card-body">{result.volumeInfo.description}</p>
            <a href={result.saleInfo.buyLink} className="uk-button uk-button-default uk-button-small">Buy</a>
            <a href="#" className="uk-button uk-button-default uk-button-small">Save</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResList;
