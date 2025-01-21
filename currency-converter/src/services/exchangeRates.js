import axios from "axios";

const BASE_URL = "https://api.exchangerate-api.com/v4/latest/";

export const fetchExchangeRates = async (baseCurrency) => {
  try {
    const response = await axios.get(`${BASE_URL}${baseCurrency}`);
    return response.data.rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return {};
  }
};
