import React, { useState } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import './admin_styles.css'

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

  const headers = [
    "Id",
    "First_Name",
    "Total_Score",
    "Average_Score",
    "Actions"
  ];

  const handleRowClick = (id) => {
    console.log(`Clicked row with id ${id}`);
  };

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
            <div className="grid-admin">
              <div className="profile">
                <p>profile</p>
              </div>
              <div className="chart">
                <p>chart</p>
              </div>
              <div className="table">
                {data.length > 0 ? (
                  <Table
                    headers={headers}
                    data={data}
                    onRowClick={handleRowClick}
                  />
                ) : (
                  <p>Presiona el boton para mostrar los datos</p>
                )}
                <div className='center-btn'>
                  <Button onClick={fetchData}>Load data</Button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Admin_Page;
