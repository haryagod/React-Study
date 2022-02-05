import React from "react";
const Like = ({ like, movieId, onLike }) => {
  let classes = "fa fa-heart";
  if (!like) classes += classes + "-o";
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      onClick={() => onLike(movieId)}
      aria-hidden="true"
    ></i>
  );
};
export default Like;
