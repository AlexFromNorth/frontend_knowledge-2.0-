import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDates, updateDocument } from "../../request/request";
import { filter } from "./filter.ts";
import { sanitize } from "dompurify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import CommentsWrapper from "../comments/CommentsWrapper.tsx";
import { putCollection } from "../../redux/authSlice.ts";

const CollectionContent = () => {
  const { collection, document } = useParams();
  const [content, setContent] = useState([]);
  const [edit, setEdit] = useState(false);
  const [textEdit, setTextEdit] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth);

  content.length < 1 &&
    getDates(collection).then((data) => {
      setContent(data);
      // console.log(1);
    });

  // console.log(user?.auth?.admin);

  // rerender component to edit
  useEffect(() => {
    getDates(collection).then((data) => {
      setContent(data);
    });
  }, [refresh]);

  useEffect(() => {
    // const itemInner = content.map((item) => item.id);
    dispatch(putCollection(content));
    // console.log(itemInner);
    // здесь мы получаем разные элементы из хранилища
    // надо доделать и отобразить на странице
    // console.log(content.forEach((item) => console.log(item.data())));
  }, [content]);

  return (
    <div className="collectionContent container">
      <h3>Статьи:</h3>
      {/* добавить кнопки перемещения и условия их отображения */}

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
                    <>
                      <div>
                        {/* btn for edit data_collection */}
                        {user?.auth?.admin == true && (
                          <button
                            onClick={() => {
                              setEdit(!edit);
                            }}
                          >
                            Edit
                          </button>
                        )}
                        <div
                          className="info"
                          dangerouslySetInnerHTML={{
                            __html: sanitize(el.data().info),
                          }}
                        ></div>
                      </div>
                      <CommentsWrapper />
                    </>
                  ) : (
                    <div>
                      <button
                        onClick={() => {
                          setEdit(!edit);
                        }}
                      >
                        Edit
                      </button>
                      <textarea onChange={(e) => setTextEdit(e.target.value)}>
                        {sanitize(el.data().info)}
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
