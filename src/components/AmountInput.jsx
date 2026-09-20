import React from "react";

const AmountInput = ({ amount, onChange }) => {
  return (
    <div className="input-container">
      <label htmlFor="amount">Amount -</label>

      <input
        type="number"
        id="amount"
        name="amount"
        className="common-input"
        value={amount}
        onChange={onChange}
      />
    </div>
  );
};

export default AmountInput;
