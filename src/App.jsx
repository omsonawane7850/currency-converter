import logo from "/public/godsfavoritearts-money-bag-14140.gif";
import "./App.css";
import { useEffect, useState } from "react";
import CurrencyExchange from "./components/CurrencyExchange";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState({});

  const API_KEY = import.meta.env.VITE_CURRENCY_API_ID;

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        setExchangeRate(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency]);

  const rate = exchangeRate.conversion_rates?.[toCurrency];

  const convertedAmount = (amount * (rate || 0)).toFixed(2);

  const currencies = Object.keys(exchangeRate.conversion_rates || {});

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

      <CurrencyExchange
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        currencies={currencies}
        onChange={handleOnChange}
      />

      <div className="output">
        <p>
          Converted Amount:{" "}
          <b>
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </b>
        </p>
      </div>
    </div>
  );
}

export default App;
