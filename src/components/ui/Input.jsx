import React from "react";

const Input = ({ label, type, state, setState }) => {
  return (
    <div className="mb-3">
      <input
        className="form-control"
        type={type}
        value={state}
        onChange = {e => setState(e.target.value)}
        placeholder={label}
        // id="inputname"
      />

      <label htmlFor="iputname">{label}</label>
    </div>
  );
};

export default Input;
