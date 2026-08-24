
import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, loading, error } = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const exchangeRate = currencyInfo[to];

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="background-glow background-glow-one"></div>
        <div className="background-glow background-glow-two"></div>
      </div>

      <div className="relative w-full max-w-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-400/20 mb-4">
            <span className="text-2xl">⇄</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Currency Converter
          </h1>

          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Convert currencies quickly with updated exchange rates.
          </p>
        </div>

        {/* Converter Card */}
        <div className="converter-card rounded-3xl p-5 sm:p-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <InputBox
              label="You send"
              amount={amount}
              currencyOptions={options}
              selectCurrency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
            />

            {/* Swap */}
            <div className="relative flex justify-center my-2">
              <div className="absolute left-0 right-0 top-1/2 border-t border-white/10"></div>

              <button
                type="button"
                onClick={swap}
                aria-label="Swap currencies"
                className="swap-button relative z-10 flex items-center justify-center w-11 h-11 rounded-full bg-slate-800 border border-white/10 text-blue-400 text-xl shadow-lg"
              >
                ⇅
              </button>
            </div>

            <InputBox
              label="You receive"
              amount={convertedAmount}
              currencyOptions={options}
              selectCurrency={to}
              amountDisable
              onCurrencyChange={(currency) => setTo(currency)}
            />

            {/* Exchange Rate */}
            <div className="mt-5 rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-3">
              {loading ? (
                <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                  <span className="loading-dot"></span>
                  Fetching exchange rate...
                </div>
              ) : error ? (
                <p className="text-center text-sm text-red-400">
                  Unable to fetch exchange rates. Please try again.
                </p>
              ) : exchangeRate ? (
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base text-slate-400">
                    Exchange rate
                  </span>

                  <span className="text-sm font-semibold text-white">
                    1 {from} = {exchangeRate.toFixed(4)} {to}
                  </span>
                </div>
              ) : (
                <p className="text-center text-sm text-slate-500">
                  Select currencies to view the exchange rate.
                </p>
              )}
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              disabled={loading || !exchangeRate}
              className="convert-button w-full mt-5 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed transition-all duration-200 text-white font-semibold shadow-lg shadow-blue-900/20"
            >
              Convert Currency
            </button>
          </form>

          {/* Footer */}
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Built with React
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;