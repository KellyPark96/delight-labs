import { css } from "@emotion/react";
import HistoryItemImage from "./HistoryItemImage";
import HistoryDate from "./HistoryDate";
import HistoryNameAndAmount from "./HistoryNameAndAmount";
import { dataResponseType } from "../../types/dataType";

type TransactionListItemProps = {
  transaction: dataResponseType;
};

const TransactionListItem = ({ transaction }: TransactionListItemProps) => {
  return (
    <div
      className="transaction-list-item"
      css={css`
        display: flex;
        gap: 20px;
        width: 100%;
        height: 51px;
      `}
    >
      <HistoryItemImage />
      <div
        css={css`
          flex: 1;
          height: 100%;
        `}
      >
        <HistoryNameAndAmount
          name={transaction.name}
          amount={transaction.amount}
        />
        <HistoryDate type={transaction.type} date={transaction.timestamp} />
      </div>
    </div>
  );
};

export default TransactionListItem;
