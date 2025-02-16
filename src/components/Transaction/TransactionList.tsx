import { css } from "@emotion/react";
import TransactionListItem from "./TransactionListItem";
import { dataResponseType } from "../../types/dataType";

type TransactionListProps = {
  transactions: dataResponseType[];
};

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 27px;
      `}
    >
      {transactions?.map((transaction, index) => {
        return (
          <TransactionListItem
            transaction={transaction}
            key={`transaction-${transaction.name}-${index}`}
          />
        );
      })}
    </div>
  );
};

export default TransactionList;
