import api from "@/services/api";
import type {LatestRatesResponse, ConvertCurrencyVariables} from "@/types/types";

export async function convertCurrency({amount, from, to}: ConvertCurrencyVariables): Promise<number> {
  try {
    const response = await api.get<LatestRatesResponse>("/latest", {
      params: {
        amount,
        base: from,
        symbols: to,
      },
    });

    return response.data.rates[to];
  } catch (error) {
    console.error("Error converting currency:", error);

    throw error;
  }
}