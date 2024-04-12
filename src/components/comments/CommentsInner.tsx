import React, { useEffect, useState } from "react";
import { addComments, getDates } from "../../request/request";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { serverTimestamp } from "firebase/firestore";
import { putCollection } from "../../redux/authSlice.ts";

const CommentsInner = () => {
  const { collection, document } = useParams();
  const [message, setMessage] = useState("");

  const [content, setContent] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    getDates(collection).then((data) => {
      setContent(data);
    });
  }, [refresh]);

  useEffect(() => {
    dispatch(putCollection(content));
  }, [content]);

  return (
    <div>
      <textarea
        name=""
        id=""
        cols="70"
        rows="10"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <button
        onClick={() => {
          message.length > 0 &&
            (() => {
              addComments(
                collection,
                document,
                message,
                "id" + new Date().getTime(),
                user?.auth?.name,
                serverTimestamp(),
              );
              setMessage("");
              setRefresh(!refresh);
            })();
        }}
      >
        Отправить
      </button>
      <button
        onClick={() => {
          setMessage("");
          console.log(message);
        }}
      >
        delete text
      </button>
    </div>
  );
};

export default CommentsInner;
