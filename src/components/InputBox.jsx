import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div className="input-card">
      <div className="flex items-center justify-between mb-3">
        <label
          htmlFor={amountInputId}
          className="text-sm font-medium text-slate-300"
        >
          {label}
        </label>

        <span className="text-xs text-slate-500 uppercase tracking-wider">
          Currency
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        {/* Amount */}
        <div className="relative flex-1">
          <input
            id={amountInputId}
            type="number"
            min="0"
            step="any"
            placeholder="0.00"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange &&
              onAmountChange(
                e.target.value === "" ? "" : Number(e.target.value)
              )
            }
            className="amount-input w-full bg-transparent text-2xl font-semibold text-white placeholder:text-slate-600 outline-none"
          />
        </div>

        {/* Currency */}
        <div className="sm:w-32">
          <select
            className="currency-select w-full bg-slate-800/80 border border-white/10 rounded-xl px-3 py-3 text-sm font-semibold text-white outline-none cursor-pointer"
            value={selectCurrency}
            disabled={currencyDisable}
            onChange={(e) =>
              onCurrencyChange &&
              onCurrencyChange(e.target.value)
            }
          >
            {currencyOptions.map((currency) => (
              <option
                key={currency}
                value={currency}
                className="bg-slate-800"
              >
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;