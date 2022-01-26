import React, { Component } from 'react';
import Like from './like';

//items , properties ,onLike ,onDelete



class TableBody extends Component {
    state = {  } 
    render() { 
        
        const {items ,properties,onLike,onDelete} =this.props
        return (
            <tbody>
            {items.map((row) => {
              return (

                <tr key={row._id}>
                    {properties.map((column,ci )=>{  
                        const pathvariable = column.path?.split(".")[0];
                       if(pathvariable && column.property)
                       {
                      return <td key={row._id + ci}>{row[pathvariable][column.property]}</td>
                       }
                        if(pathvariable)
                        {
                         return <td key={row._id + ci}>{row[column.path]}</td>
                        }
                        })}
                  <td>
                    <Like
                      movieId={row._id}
                      like={row.like}
                      onLike={onLike}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => onDelete(row._id)}
                      className="btn btn-danger sm m-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        );
    }
}
 
export default TableBody;