import React from "react";
import "./futureStyles.css";

export const FutureButton = ({ children, onClick, type = "button" }) => {
  return (
    <button className="future-btn" type={type} onClick={onClick}>
      {children}
    </button>
  );
};


export const FutureCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className="future-checkbox-wrapper">
      <input type="checkbox" checked={checked} onChange={onChange} className="future-checkbox" />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};

export const FutureDropdown = ({ options = [], value, onChange }) => {
  return (
    <select className="future-dropdown" value={value} onChange={onChange}>
      <option value="" disabled>Select an option</option>
      {options.map((opt, i) => (
        <option key={i} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};


export const FutureInput = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="future-input-group">
      {label && <label className="future-label">{label}</label>}
      <input
        className="future-input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
