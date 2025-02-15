import { css } from "@emotion/react";
import {
  TransactionTabType,
  updateStorageTransactionState,
} from "../../utils/tabState";
import colors from "../../styles/colors";
import { TransactionTabProps } from "../RecentTransactions";

const TransactionTabs = ({
  tabs,
  state: [tabState, setTabState],
}: TransactionTabProps) => {
  const onClickVoteTab = (tabValue: TransactionTabType) => {
    setTabState(tabValue);
    updateStorageTransactionState(tabValue);
  };

  return (
    <div
      css={css`
        display: flex;
        height: 34px;
        margin-bottom: 30px;
        gap: 25px;
      `}
    >
      {tabs.map((item, index) => {
        const tabContent = item.label;
        const tabValue = item.value;
        const active = tabValue === tabState;
        return (
          <div key={`graph-tabs-${index}-${tabValue}`}>
            <label
              css={css`
                width: 100%;
                height: 100%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${colors.white};
                color: ${active ? colors.primary : colors.gray500};
                font-weight: 600;
                font-size: 16px;
              `}
              onClick={() => onClickVoteTab(tabValue)}
            >
              {tabContent}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionTabs;
