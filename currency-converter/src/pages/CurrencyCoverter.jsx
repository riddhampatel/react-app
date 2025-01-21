import React, { useState, useEffect } from "react";
import CurrencyInputBox from "../components/CurrencyInputBox";
import ExchangeRateDisplay from "../components/ExchangeRateDisplay";
import { fetchExchangeRates } from "../services/exchangeRates";
import "../styles/components.css";

function CurrencyConverter() {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const loadRates = async () => {
      const data = await fetchExchangeRates(baseCurrency);
      setRates(data);
    };
    loadRates();
  }, [baseCurrency]);

  useEffect(() => {
    if (rates[targetCurrency]) {
      setConvertedAmount((amount * rates[targetCurrency]).toFixed(2));
    }
  }, [amount, targetCurrency, rates]);

  return (
    <div className="currency-converter">
      <CurrencyInputBox
        label="From"
        amount={amount}
        onAmountChange={setAmount}
        onCurrencyChange={setBaseCurrency}
        currencyOptions={Object.keys(rates)}
        selectCurrency={baseCurrency}
      />
      <CurrencyInputBox
        label="To"
        amount={convertedAmount}
        onCurrencyChange={setTargetCurrency}
        currencyOptions={Object.keys(rates)}
        selectCurrency={targetCurrency}
        amountDisable={true}
      />
      <ExchangeRateDisplay
        baseCurrency={baseCurrency}
        targetCurrency={targetCurrency}
        rate={rates[targetCurrency]}
      />
    </div>
  );
}

export default CurrencyConverter;
