import { Navigate } from "react-router-dom";

function Protected({ children, admin, ...props }) {
  const isAdmin = localStorage.getItem("isAdmin");

  //console.log("admin:", admin);
  //console.log("isAdmin:", isAdmin);

  if (localStorage.getItem("token")) {
    if (admin && isAdmin === "false") {
      return <Navigate to="/" />;
    } else {
      return children;
    }
  } else {
    return <Navigate to="/" />;
  }
}

export default Protected;
