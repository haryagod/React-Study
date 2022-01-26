import React from "react";
const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.like) classes += classes + "-o";
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      onClick={() => props.onLike(props.movieId)}
      aria-hidden="true"
    ></i>
  );
};
export default Like;
