import React from "react";

function ExchangeRateDisplay({ baseCurrency, targetCurrency, rate }) {
  if (!rate) return null;

  return (
    <div className="exchange-rate-display">
      <p>
        Exchange Rate: 1 {baseCurrency} = {rate} {targetCurrency}
      </p>
    </div>
  );
}

export default ExchangeRateDisplay;
