import logo from "/public/godsfavoritearts-money-bag-14140.gif";
import "./App.css";

function App() {
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
          />
        </div>

        {/* From Currency */}
        <div className="input-container">
          <label htmlFor="from-currency">From Currency -</label>

          <select
            name="from-currency"
            id="from-currency"
            className="common-input"
          >
            <option value="USD">USD</option>
            <option value="INR">INR</option>
          </select>
        </div>

        {/* To Currency */}
        <div className="input-container">
          <label htmlFor="to-currency">To Currency -</label>

          <select name="to-currency" id="to-currency" className="common-input">
            <option value="INR">INR</option>
            <option value="USD">USD</option>
          </select>
        </div>
      </div>

      <div className="output">
        <p>
          Converted Amount: <b>988</b>
        </p>
      </div>
    </div>
  );
}

export default App;
