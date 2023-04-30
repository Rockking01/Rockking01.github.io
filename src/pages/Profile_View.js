import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import Table from "../components/Table";
import Spinner from "../components/Spinner";

function Profile_View() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    API.call(
      `users/${id}/`,
      (response) => {
        setData(response);
        setIsLoading(false);
      },
      (error) => {
        setError(error);
        setIsLoading(false);
      }
    );
  }, [id]);

  const handleRowClick = (id) => {
    console.log(`Clicked row with id ${id}`);
  };
  const headers = [
    "Id",
    "first_name",
    "last_name",
    "total_score",
    "average_score",
  ];

  return (
    <>
      <h1>Profile View</h1>

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {error ? (
            <p>{error}</p>
          ) : (
            <>
              {Object.keys(data).length > 0 ? (
                <Table
                  headers={headers}
                  onRowClick={handleRowClick}
                  data={[data]}
                />
              ) : (
                <p>No hay datos que mostrar</p>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default Profile_View;
