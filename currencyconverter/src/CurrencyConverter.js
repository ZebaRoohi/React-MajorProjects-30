import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    // Fetching currency rates from the API
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
      .then((response) => response.json())
      .then((data) => {
        setCurrencies(Object.keys(data));
      })
      .catch((error) => console.error('Error fetching currencies:', error));
  }, []);

  useEffect(() => {
    // Fetching exchange rate based on selected currencies
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}.json`)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRate(data[toCurrency]);
      })
      .catch((error) => console.error('Error fetching exchange rate:', error));
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    // Calculating converted amount
    setConvertedAmount(amount * exchangeRate);
  }, [amount, exchangeRate]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
      <div>
        <label>From Currency:</label>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>To Currency:</label>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <h2>Converted Amount: {convertedAmount}</h2>
      </div>
    </div>
  );
};

export default CurrencyConverter;
