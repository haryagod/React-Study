import React, { Component } from "react";

//items , properties ,onLike ,onDelete

class TableBody extends Component {
  render() {
    const { items, properties } = this.props;
    return (
      <tbody>
        {items.map((row) => {
          return (
            <tr key={row._id}>
              {properties.map((column, ci) => {
                if (column.content)
                  return (
                    <td key={column.key || row._id + ci}>
                      {column.content(row)}
                    </td>
                  );
                const pathvariable = column.path?.split(".")[0];
                if (pathvariable && column.property) {
                  return (
                    <td key={row._id + ci}>
                      {row[pathvariable][column.property]}
                    </td>
                  );
                }
                if (pathvariable) {
                  return <td key={row._id + ci}>{row[pathvariable]}</td>;
                }

                return null;
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
