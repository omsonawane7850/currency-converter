import logo from "/public/godsfavoritearts-money-bag-14140.gif";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState({});

  const API_KEY = import.meta.env.VITE_CURRENCY_API_ID;
  // console.log(API_KEY);
  useEffect(() => {
    const fetchExchangeRate = async () => {
      const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;

      try {
        const response = await fetch(url);
        // console.log(response);

        const data = await response.json();
        // console.log(data);

        setExchangeRate(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExchangeRate();
  }, [fromCurrency]);

  const rate = exchangeRate.conversion_rates?.[toCurrency];
  const convertedAmount = (amount * (rate || 0)).toFixed(2);

  useEffect(() => {}, []);

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "amount":
        setAmount(value);
        break;

      case "from-currency":
        setFromCurrency(value);
        break;

      case "to-currency":
        setToCurrency(value);
        break;
    }
  };

  return (
    <div className="card">
      <img src={logo} alt="logo" />

      <h1>Currency Converter</h1>

      <div className="currency-exchange">
        {/* Amount */}
        <div className="input-container">
          <label htmlFor="amount">Amount -</label>

          <input
            type="number"
            id="amount"
            name="amount"
            className="common-input"
            value={amount}
            onChange={handleOnChange}
          />
        </div>

        {/* From Currency */}
        <div className="input-container">
          <label htmlFor="from-currency">From Currency -</label>

          <select
            name="from-currency"
            id="from-currency"
            className="common-input"
            value={fromCurrency}
            onChange={handleOnChange}
          >
            {Object.keys(exchangeRate.conversion_rates || {}).map(
              (currency) => (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              ),
            )}
          </select>
        </div>

        {/* To Currency */}
        <div className="input-container">
          <label htmlFor="to-currency">To Currency -</label>

          <select
            name="to-currency"
            id="to-currency"
            className="common-input"
            value={toCurrency}
            onChange={handleOnChange}
          >
            {Object.keys(exchangeRate.conversion_rates || {}).map(
              (currency) => (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              ),
            )}
          </select>
        </div>
      </div>

      <div className="output">
        <p>
          Converted Amount:{" "}
          <b>
            {" "}
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </b>
        </p>
      </div>
    </div>
  );
}

export default App;
