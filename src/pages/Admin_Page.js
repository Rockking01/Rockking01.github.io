import React, { useState } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import Spinner from "../components/Spinner";
import Button from "../components/Button";

function Admin_Page() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    API.call(
      "users/",
      (response) => {
        setData(response);
        setIsLoading(false);
      },
      (error) => {
        setError(error);
        setIsLoading(false);
      }
    );
  };

  const headers = ["First_Name", "Total_Score", "Average_Score"];

  return (
    <>
      <h1>Admin Page</h1>

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {error ? (
            <p>{error}</p>
          ) : (
            <>
              {data.length > 0 ? (
                <Table headers={headers} data={data} />
              ) : (
                <p>No data available</p>
              )}
            </>
          )}
        </>
      )}

      <Button onClick={fetchData}>Load data</Button>
    </>
  );
}

export default Admin_Page;

