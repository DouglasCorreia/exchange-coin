export type LatestRatesResponse = {
  rates: Record<string, number>;
};

export type ResultCurrencyProps = {
  result: number;
  currency: string;
}

export type ConvertCurrencyVariables = {
  amount: number;
  from: string;
  to: string;
}