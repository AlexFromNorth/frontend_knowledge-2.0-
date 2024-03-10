import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCities, updateDocument } from "../../request/request";
import { filter } from "./filter.ts";
import { sanitize } from "dompurify";

const CollectionContent = () => {
  const { collection, document } = useParams();
  const [content, setcontent] = useState([]);
  const [edit, setEdit] = useState(false);
  const [textEdit, setTextEdit] = useState(null);
  const [refresh, setRefresh] = useState(false);

  content.length < 1 &&
    getCities(collection).then((data) => {
      setcontent(data);
    });

  // rerender component to edit
  useEffect(() => {
    getCities(collection).then((data) => {
      setcontent(data);
    });
  }, [refresh]);

  return (
    <div>
      <p>CollectionContent</p>
      <button
        onClick={() => {
          setEdit(!edit);
        }}
      >
        Edit
      </button>
      <div>
        <ul>
          {typeof document == "undefined"
            ? content.map((el) => (
                <li key={el.id}>
                  <Link to={el.id}>{el.id}</Link>
                </li>
              ))
            : filter(content, document).map((el) => (
                <div key={el.id}>
                  {!edit ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sanitize(el.data().info),
                      }}
                    ></div>
                  ) : (
                    <div>
                      <textarea onChange={(e) => setTextEdit(e.target.value)}>
                        {el.data().info}
                      </textarea>
                      <button
                        onClick={() => {
                          textEdit != null &&
                            updateDocument(collection, document, textEdit);

                          setRefresh(!refresh);
                          // we having problem with rerender new data
                          // create function onclick
                        }}
                      >
                        update
                      </button>
                    </div>
                  )}
                </div>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default CollectionContent;
