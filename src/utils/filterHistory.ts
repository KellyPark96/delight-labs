import { dataResponseType } from "../types/dataType";

export const getRecentTransactions = (
  arr: dataResponseType[],
  count: number
) => {
  const now = new Date(); // 현재 시간

  return arr
    .filter((item) => new Date(item.timestamp) < now) // 현재 시간보다 과거인 데이터만 필터링
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ) // 최근 순으로 정렬
    .slice(0, count);
};
