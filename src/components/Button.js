import React from "react";

function Button(props) {
  return (
    <button onClick={props.onClick} className={`btn max-btn btn-${props.type}`}>
      {props.children}
    </button>
  );
}

export default Button;
