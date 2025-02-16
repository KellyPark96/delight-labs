import { css } from "@emotion/react";
import colors from "../styles/colors";
import TransactionTabs from "./Transaction/TransactionTabs";
import { useEffect, useState } from "react";
import TransactionList from "./Transaction/TransactionList";
import { getRecentTransactions } from "../utils/filterHistory";
import {
  HistoryPropType,
  TransactionTabPropsType,
  TransactionTabType,
} from "../types/dataType";
import {
  filterExpenseAmount,
  filterIncomeAmount,
} from "../utils/formatCurrency";

const RecentTransactions = ({
  isLoading,
  initTransactionData,
  state: [transactionData, setTransactionData],
}: HistoryPropType) => {
  const [tabState, setTabState] = useState<TransactionTabType>("all");
  const TabProps: TransactionTabPropsType = {
    tabs: [
      { label: "All", value: "all" },
      { label: "Expense", value: "expense" },
      { label: "Income", value: "income" },
    ],
    state: [tabState, setTabState],
  };
  const allresponse = getRecentTransactions(initTransactionData, 20);

  const expenseData = filterExpenseAmount(initTransactionData);
  const expenseResponse = getRecentTransactions(expenseData, 10);

  const incomeData = filterIncomeAmount(initTransactionData);
  const incomeResponse = getRecentTransactions(incomeData, 10);

  useEffect(() => {
    if (tabState === "all") setTransactionData(allresponse);
    if (tabState === "expense") setTransactionData(expenseResponse);
    if (tabState === "income") setTransactionData(incomeResponse);
  }, [tabState]);

  return (
    <div
      css={css`
        margin-top: 40px;
        & > h2 {
          text-align: left;
          font-weight: 600;
          font-size: 18px;
          color: ${colors.black};
        }
      `}
    >
      <h2>RecentTransactions</h2>
      <TransactionTabs {...TabProps} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <TransactionList transactions={transactionData} />
      )}
    </div>
  );
};

export default RecentTransactions;
