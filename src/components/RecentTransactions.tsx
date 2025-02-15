import { css } from "@emotion/react";
import colors from "../styles/colors";
import TransactionTabs from "./Transaction/TransactionTabs";
import { useState } from "react";
import { TransactionTabType } from "../utils/tabState";
import TransactionList from "./Transaction/TransactionList";
import { getRecentTransactions } from "../utils/filterHistory";
import { dataResponseType } from "../types/dataType";
import {
  filterExpenseAmount,
  filterIncomeAmount,
} from "../utils/formatCurrency";

export type TransactionTabProps = {
  tabs: { value: TransactionTabType; label: string }[];
  state: [string, React.Dispatch<React.SetStateAction<any>>];
};

type HistoryProps = {
  responseData: dataResponseType[];
};

const RecentTransactions = ({ responseData }: HistoryProps) => {
  const [tabState, setTabState] = useState<TransactionTabType>("all");
  const TabProps: TransactionTabProps = {
    tabs: [
      { label: "All", value: "all" },
      { label: "Expense", value: "expense" },
      { label: "Income", value: "income" },
    ],
    state: [tabState, setTabState],
  };
  const allresponse = getRecentTransactions(responseData, 20);

  const expenseData = filterExpenseAmount(responseData);
  const expenseResponse = getRecentTransactions(expenseData, 10);

  const incomeData = filterIncomeAmount(responseData);
  const incomeResponse = getRecentTransactions(incomeData, 10);

  console.log("allresponse", allresponse);
  console.log("expenseResponse", expenseResponse);
  console.log("incomeResponse", incomeResponse);

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
      <TransactionList />
    </div>
  );
};

export default RecentTransactions;
