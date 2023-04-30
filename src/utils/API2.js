class API2 {
  static baseUrl = "http://127.0.0.1:8000/api";
  static headers = {
    "Content-Type": "application/json",
  };

  static setAuthorizationHeader() {
    const token = localStorage.getItem("token");
    if (token) {
      API2.headers["Authorization"] = `Token ${token}`;
    } else {
      delete API2.headers["Authorization"];
    }
  }

  static handleResponse(response, onSuccess, onError) {
    console.log(`Response received from API. Status code: ${response.status}`);
    if (response.ok) {
      return response.json().then((jsonResponse) => onSuccess(jsonResponse));
    } else {
      return response.text().then((text) => onError(text));
    }
  }

  static post(route, onSuccess, onError, data) {
    API2.setAuthorizationHeader();

    const url = `${API2.baseUrl}/${route}`;
    console.log(`Making POST request to ${url} with data:`, data);

    const options = {
      method: "POST",
      headers: { ...API2.headers },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((response) => API2.handleResponse(response, onSuccess, onError))
      .catch((error) => {
        console.log("Error making POST request:", error);
        console.onError(error);
      });
  }

  static get(route, onSuccess, onError) {
    API2.setAuthorizationHeader();

    const url = `${API2.baseUrl}/${route}`;
    console.log(`Making GET request to ${url}`);

    const options = {
      headers: { ...API2.headers },
    };

    fetch(url, options)
      .then((response) => API2.handleResponse(response, onSuccess, onError))
      .catch((error) => {
        console.log("Error making GET request:", error);
        onError(error);
      });
  }

  static update(route, data, onSuccess, onError) {
    API2.setAuthorizationHeader();

    const url = `${API2.baseUrl}/${route}`;
    console.log(`Making PUT request to ${url} with data:`, data);

    const options = {
      method: "PUT",
      headers: { ...API2.headers },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((response) => API2.handleResponse(response, onSuccess, onError))
      .catch((error) => {
        console.log("Error making PUT request:", error);
        onError(error);
      });
  }
}

export default API2;
