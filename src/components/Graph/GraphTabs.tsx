import { css } from "@emotion/react";
import colors from "../../styles/colors";
import { GraphTabPropsType, GraphTabType } from "../../types/dataType";

const GraphTabs = ({
  tabs,
  state: [tabState, setTabState],
}: GraphTabPropsType) => {
  const onClickVoteTab = (tabValue: GraphTabType) => {
    setTabState(tabValue);
  };

  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        min-width: 172px;
        max-width: 220px;
        height: 34px;
        margin-bottom: 10px;
        border-radius: 20px;
        background-color: ${colors.gray300};
      `}
    >
      {tabs.map((item, index) => {
        const tabContent = item.label;
        const tabValue = item.value;
        const active = tabValue === tabState;
        return (
          <div
            key={`graph-tabs-${index}-${tabValue}`}
            css={css`
              position: relative;
              flex: 1;
            `}
          >
            <label
              css={css`
                width: 100%;
                height: 100%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${active ? colors.primary : colors.gray300};
                color: ${active ? colors.white : colors.gray100};
                font-weight: 600;
                font-size: 16px;
                border-radius: 20px;
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

export default GraphTabs;
