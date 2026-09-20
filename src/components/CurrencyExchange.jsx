import React from "react";
import AmountInput from "./AmountInput";
import CurrencySelect from "./CurrencySelect";

const CurrencyExchange = ({
  amount,
  fromCurrency,
  toCurrency,
  currencies,
  onChange,
}) => {
  return (
    <div className="currency-exchange">
      <AmountInput amount={amount} onChange={onChange} />

      <CurrencySelect
        label="From Currency"
        name="from-currency"
        id="from-currency"
        value={fromCurrency}
        onChange={onChange}
        currencies={currencies}
      />

      <CurrencySelect
        label="To Currency"
        name="to-currency"
        id="to-currency"
        value={toCurrency}
        onChange={onChange}
        currencies={currencies}
      />
    </div>
  );
};

export default CurrencyExchange;
