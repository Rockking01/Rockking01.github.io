import React, { useEffect, useState } from "react";

function Input(props) {
  const [value, setValue] = useState(props.value || "");

  useEffect(() => {
    setValue(props.value || "");
  }, [props.value]);

  useEffect(() => {
    props.onChangeValue && props.onChangeValue(props.name, value);
  }, [value]);

  return (
    <div className="row">
      <div className="col">
        <label className={props.labelClassName}> {props.label}</label>
      </div>

      <div className="col">
        <input
          className="form-control"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
      </div>
    </div>
  );
}

export default Input;