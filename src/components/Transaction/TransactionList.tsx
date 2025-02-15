import { css } from "@emotion/react";
import TransactionListItem from "./TransactionListItem";

const TransactionList = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 27px;
      `}
    >
      <TransactionListItem />
      <TransactionListItem />
      <TransactionListItem />
      <TransactionListItem />
      <TransactionListItem />
      <TransactionListItem />
      <TransactionListItem />
      <TransactionListItem />
      <TransactionListItem />
      <TransactionListItem />
    </div>
  );
};

export default TransactionList;
