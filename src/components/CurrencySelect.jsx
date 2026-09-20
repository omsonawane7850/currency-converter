import React from "react";

const CurrencySelect = ({ label, name, id, value, onChange, currencies }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label} -</label>

      <select
        name={name}
        id={id}
        className="common-input"
        value={value}
        onChange={onChange}
      >
        {currencies.map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;
