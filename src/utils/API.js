class API {
  static call = (route, onSuccess, onError, params) => {
    const baseUrl = "https://rockking01.pythonanywhere.com/api";

    let headers = {
      "Content-Type": "application/json",
    };

    if (localStorage.getItem("token")) {
      headers["Authorization"] = `Token ${localStorage.getItem("token")}`;
    }

    let url = `${baseUrl}/${route}`;
    if (params && params.id) {
      url = `${baseUrl}/${route}/${params.id}/`;
      delete params.id;
    }

    console.log(`Haciendo llamada a la API: ${url}`);

    fetch(url, {
      ...params,
      headers: { ...headers },
    })
      .then(function (response) {
        console.log(`Respuesta de la API recibida. Código: ${response.status}`);
        if (response.ok) {
          return response.json();
        } else {
          onError(response);
          return null;
        }
      })
      .then(function (jsonResponse) {
        if (jsonResponse) {
          console.log("Respuesta JSON recibida:");
          console.log(jsonResponse);
          onSuccess(jsonResponse);
        }
      })
      .catch(function (error) {
        console.log("Error en la llamada a la API:");
        console.error(error);
      });
  };
}

export default API;
