import React from "react";
import { Link } from "react-router-dom";
import './Table_Styles.css'

const Table = ({ headers, data, onRowClick }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} onClick={() => onRowClick(row.id)}>
            {headers.map((header) => (
              <td key={`${index}-${header}`}>
                {header.toLowerCase() === "id" ? (
                  <Link to={`/profile/${row.id}/`}>
                    {row[header.toLowerCase()]}
                  </Link>
                ) : (
                  row[header.toLowerCase()]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
