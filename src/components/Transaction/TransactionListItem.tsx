import { css } from "@emotion/react";
import HistoryItemImage from "./HistoryItemImage";
import HistoryDate from "./HistoryDate";
import HistoryNameAndAmount from "./HistoryNameAndAmount";

const TransactionListItem = () => {
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
        <HistoryNameAndAmount name={"kelly"} amount={"-12.99"} />
        <HistoryDate date={"2024-10-01T15:18:38.158418Z"} />
      </div>
    </div>
  );
};

export default TransactionListItem;
