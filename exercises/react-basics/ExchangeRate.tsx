// https://codesandbox.io/s/use-effect-exchange-rate-szje3
import { useState, useEffect } from "react";

const currencies = ["USD", "EUR", "JPY", "GBP"];
async function fetchExchangeRate(from: string, to: string): Promise<number> {
  const res = await fetch(
    "https://api.exchangerate.host/latest?base=" +
      from.toUpperCase() +
      "&symbols=" +
      to.toUpperCase()
  );
  const data = await res.json();
  return data.rates[to.toUpperCase()];
}

function ExchangeRate() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [rate, setRate] = useState<number | null>(null);
  async function loadExchangeRate() {
    setRate(null);
    const rate = await fetchExchangeRate(from, to);
    setRate(rate);
  }
  useEffect(() => {
    loadExchangeRate();
  }, [from, to]);
  return (
    <div>
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {currencies.map((c) => (
          <option value={c}>{c}</option>
        ))}
      </select>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {currencies.map((c) => (
          <option value={c}>{c}</option>
        ))}
      </select>
      <div>{rate !== null ? rate : "no data"}</div>
    </div>
  );
}

export default ExchangeRate;
