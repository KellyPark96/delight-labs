import { dataResponseType } from "../types/dataType";

type amountsDataProps = {
  [key: string]: Array<dataResponseType>;
};

export const formatCurrency = (value: string) => {
  const numberValue = parseFloat(value);
  const formattedValue = Math.abs(numberValue).toFixed(2);
  return numberValue < 0 ? `-$${formattedValue}` : `$${formattedValue}`;
};

export const filterExpenseAmount = (data: dataResponseType[]) => {
  return data.filter((transaction) => parseFloat(transaction.amount) < 0);
};

export const filterIncomeAmount = (data: dataResponseType[]) => {
  return data.filter((transaction) => parseFloat(transaction.amount) > 0);
};

export const sortAmountsData = (data: amountsDataProps) => {
  const test = Object.keys(data)
    .sort()
    .reduce((newObj: any, key) => {
      newObj[key] = data[key];
      return newObj;
    }, {});
  return test;
};

export const amountsData = (data: amountsDataProps) => {
  const totalAmount = Object.keys(data).map((key) => {
    const result =
      data[key as keyof typeof data]
        .map((item: dataResponseType) => item.amount)
        .reduce((acc: number, curr: string) => acc + parseFloat(curr), 0) /
      data[key].length;
    return result.toFixed(2);
  });
  return totalAmount;
};
