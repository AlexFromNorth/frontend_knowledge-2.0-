import React from "react";
import jsonData from "../../collections.json";
import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <ul>
      {jsonData.map((el) => (
        <li>
          <Link to={el}>{el}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Collections;
