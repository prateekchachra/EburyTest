export type Amount = {
  amount: string;
  currency: string;
};

export type CurrencyItem = {
  account_id: string;
  company_name: string;
  amount: Amount;
  credit_debit_indicator: string;
  datetime: string;
};
