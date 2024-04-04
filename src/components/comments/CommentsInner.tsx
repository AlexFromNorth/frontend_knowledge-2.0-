import React, { useState } from "react";
import { addComments } from "../../request/request";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CommentsInner = () => {
  const { collection, document } = useParams();
  const [message, setMessage] = useState("ewrwer");

  const user = useSelector((state: RootState) => state.auth);

  //   console.log(user.collection);

  return (
    <div>
      <textarea
        name=""
        id=""
        cols="70"
        rows="10"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <button
        onClick={() => {
          message.length > 0 &&
            addComments(
              collection,
              document,
              message,
              "id" + new Date().getTime(),
              user?.auth?.name,
              new Date().getTime(),
            );
          setMessage("");
        }}
      >
        Отправить
      </button>
    </div>
  );
};

export default CommentsInner;
