import React from "react";
export const ListGroup = ({ items, currentItem, itemClicked }) => {
  return (
    <ul className="list-group sm border border-primary">
      {items.map((item) =>
        item._id === currentItem ? (
          <li
            className="list-group-item active"
            onClick={() => itemClicked(item)}
            key={item._id}
          >
            {item.name}
          </li>
        ) : (
          <li
            className="list-group-item"
            style={{ cursor: "pointer" }}
            onClick={() => itemClicked(item)}
            key={item._id}
          >
            {item.name}
          </li>
        )
      )}
    </ul>
  );
};
