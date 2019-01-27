import React from "react";

function ResList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <p>{result.volumeInfo.title}</p>
          <img alt="pic" src={result.volumeInfo.imageLinks.thumbnail}/>
        </li>
      ))}
    </ul>
  );
}

export default ResList;
