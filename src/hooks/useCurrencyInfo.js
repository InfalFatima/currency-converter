import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCurrencyData() {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(
          `https://open.er-api.com/v6/latest/${currency}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch currency data");
        }

        const result = await response.json();

        if (result.result === "success") {
          setData(result.rates);
        } else {
          setData({});
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setData({});
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchCurrencyData();
  }, [currency]);

  return {
    data,
    loading,
    error,
  };
}

export default useCurrencyInfo;