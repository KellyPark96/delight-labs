import { dataResponseType } from "../types/dataType";

export const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  return `${year}.${month}.${day} ${hour}:${minute}`;
};

export const getPastDates = (daysAgo: number) => {
  const today = new Date();
  today.setDate(today.getDate() - daysAgo);
  return today.toISOString().split("T")[0];
};

export const getLastWeekDatas = (days: number) => {
  const dates: string[] = [];
  for (let i = days; i > 0; i--) {
    dates.push(getPastDates(i).replace(/-/g, "."));
  }
  return dates;
};

export const groupTransactionsByDate = (
  data: dataResponseType[],
  days: number
) => {
  return data.reduce((acc: any, transaction: any) => {
    const date = transaction.timestamp.split("T")[0];
    const firstDate = getPastDates(days);
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
