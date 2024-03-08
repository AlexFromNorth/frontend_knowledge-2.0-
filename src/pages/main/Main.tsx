import React from "react";
import { getCities } from "../../request/request";
import jsonData from "../../collections.json";
import { Link, Route, Routes } from "react-router-dom";
import Collections from "../../components/collections/Collections.tsx";
import Test from "./Test.tsx";
import CollectionContent from "../../components/collectionContent/CollectionContent.tsx";

const Main = () => {
  // console.log(jsonData);
  // getCities();
  // getCities("JS").then((data) => {
  //   console.log(data);
  // });

  return (
    <div>
      <Routes>
        <Route path="/" element={<Collections />} />
        <Route path="/:collection" element={<CollectionContent />} />
        <Route path=":collection/:document" element={<CollectionContent />} />
      </Routes>

      <div className="App"></div>
    </div>
  );
};

export default Main;
