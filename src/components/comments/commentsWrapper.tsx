import React from "react";
import Comment from "./Comment.tsx";
import CommentsInner from "./CommentsInner.tsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { filter, getKeyByValueNegate } from "../collectionContent/filter.ts";

const CommentsWrapper = () => {
  const { document } = useParams();
  const collection = useSelector((state: RootState) => state.auth.collection);

  const commentsArrayKeys = filter(collection, document).map((el, id) => {
    return getKeyByValueNegate(el.data(), "info");
  });

  const collectionData = filter(collection, document).map((el) => el.data());

  const commentsData = (() => {
    const arr = [];
    const iter = collectionData[0];

    for (let key in iter) {
      if (commentsArrayKeys[0].some((el) => el == key)) {
        arr.push(iter[key]);
      }
    }

    return arr;
  })();

  return (
    <div>
      {commentsData.map((el) => (
        <div>{el.user}</div>
      ))}
      <Comment />
      <CommentsInner />
    </div>
  );
};

export default CommentsWrapper;
