import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCities } from "../../request/request";
import { filter } from "./filter.ts";
import { sanitize } from "dompurify";

const CollectionContent = () => {
  const ref = useParams();
  const { collection, document } = useParams();
  const [content, setcontent] = useState([]);

  content.length < 1 &&
    getCities(collection).then((data) => {
      setcontent(data);
    });

  const markup = "<h1>text</h1>ewq";

  useEffect(() => {
    // console.log(content);
  }, [content]);
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: sanitize(markup) }}></div>
      <p>CollectionContent</p>
      <div>
        рпрппрпрп
        <ul>
          {typeof document == "undefined"
            ? content.map((el) => (
                <li>
                  <Link to={el.id}>{el.id}</Link>
                </li>
              ))
            : filter(content, document).map((el) => (
                <li>
                  <p>{el.data().info}</p>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default CollectionContent;
