import React, { useState } from "react";
import API from "../utils/API";
import Table from "../components/Table";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import "./admin_styles.css";
import IdChart from "../components/IdChart";
import DetailData from "../components/DetailData";

function AdminPage() {
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
    "Last_Name",
    "Total_Score",
    "Average_Score"
  ];

  const handleRowClick = (id) => {
    console.log(`Clicked row with id ${id}`);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {error ? (
            <p>{error}</p>
          ) : (
            <div className="grid-admin">
              <div className="profile">
                <DetailData />
              </div>
              <div className="chart">
                <IdChart />
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
                <div className="center-btn">
                  <Button onClick={fetchData}>Cargar Información</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default AdminPage;
