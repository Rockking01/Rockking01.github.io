import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import Spinner from "../components/Spinner";
import UserList from "../components/UserList";

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

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {error ? (
            <p>{error}</p>
          ) : (
            <div className="">
              {Object.keys(data).length > 0 ? (
                <UserList userData={data} />
              ) : (
                <p>No hay datos que mostrar</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Profile_View;
