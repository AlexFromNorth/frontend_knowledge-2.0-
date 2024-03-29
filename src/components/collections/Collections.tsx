import React from "react";
import jsonData from "../../collections.json";
import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <ul className="collections center container">
      {jsonData.map((el) => (
        <li key={el}>
          <Link to={el}>{el}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Collections;
