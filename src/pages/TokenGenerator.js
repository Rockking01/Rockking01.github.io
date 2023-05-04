import React, { useState } from 'react';
import API2 from '../utils/API2';
import Input from '../components/Input';

function TokenGenerator() {
  const [authKey, setAuthKey] = useState("");
  const [status, setStatus] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {
      authKey: authKey.toString(), // Convertir el valor de authKey a una cadena
      status: status
    };

    API2.post(
      "token/",
      (response) => {
        console.log("User sessions received:", response);
        setToken(response.token);
      },
      (error) => {
        console.log("Error retrieving user sessions:", error);
      },
      options
    );
  };

  const handleInputChange = (name, value) => {
    if (name === "authKey") {
      setAuthKey(value);
    } else if (name === "status") {
      setStatus(value);
    }
  };

  return (
    <div>
      <h1>Generador de Tokens</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="authKey"
          label="Auth Key:"
          type="text"
          placeholder="Ingrese el Auth Key"
          value={authKey}
          onChangeValue={handleInputChange}
        />
        <Input
          name="status"
          label="Status:"
          type="text"
          placeholder="Ingrese el Status"
          value='active'
          onChangeValue={handleInputChange}
        />
        <button type="submit">Generar Token</button>
      </form>
      {token && (
        <div>
          <h2>Token generado:</h2>
          <p>{token}</p>
        </div>
      )}
    </div>
  );
}

export default TokenGenerator;
