import { dataResponseType } from "../types/dataType";

export const getPastDates = (daysAgo: number) => {
  const today = new Date();
  today.setDate(today.getDate() - daysAgo);
  return today.toISOString().split("T")[0];
};

export const groupTransactionsByDate = (data: dataResponseType[]) => {
  return data.reduce((acc: any, transaction: any) => {
    const date = transaction.timestamp.split("T")[0];
    const firstDate = getPastDates(7);
    const lastDate = getPastDates(1);
    if (date >= firstDate && date <= lastDate) {
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(transaction);
    }
    return acc;
  }, {});
};

export const getRecentPastTransactions = (data: dataResponseType[]) => {
  const now = new Date();
  return data
    .filter((transaction) => new Date(transaction.timestamp) < now)
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )
    .slice(0, 5);
};

export const getTransactionsByDateRange = (
  data: dataResponseType[],
  days: number
) => {
  const currentTime = new Date();
  const pastTime = new Date();
  pastTime.setDate(currentTime.getDate() - days);

  return data.filter((transaction) => {
    const transactionDate = new Date(transaction.timestamp);
    return transactionDate >= pastTime && transactionDate <= currentTime;
  });
};
