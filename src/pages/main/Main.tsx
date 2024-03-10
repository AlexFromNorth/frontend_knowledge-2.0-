import React from "react";
import { getCities } from "../../request/request";
import jsonData from "../../collections.json";
import { Link, Route, Routes } from "react-router-dom";
import Collections from "../../components/collections/Collections.tsx";
import Test from "./Test.tsx";
import CollectionContent from "../../components/collectionContent/CollectionContent.tsx";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Collections />} />
        {/* <Route path="/JS" element={<Collections />} /> */}
        <Route path="/:collection" element={<CollectionContent />} />
        <Route path=":collection/:document" element={<CollectionContent />} />
      </Routes>
      {/* на хостинге есть проблема при отрисовки конкретного адреса  http://m90941t3.beget.tech/JS выдает ошибку 
      Not Found
      The requested URL was not found on this server.
      -думаю эта проблема связана с роутерами(путями)*/}

      <div className="App"></div>
    </div>
  );
};

export default Main;
