import { css } from "@emotion/react";
import colors from "../../styles/colors";

type dateProps = {
  date: string;
};

const HistoryDate = ({ date }: dateProps) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 21px;
        & > h3 {
          font-weight: 500;
          font-size: 16px;
          color: ${colors.black};
        }
        & > span {
          font-weight: 700;
          font-size: 16px;
          color: ${colors.primary};
        }
      `}
    >
      <h3>Transfer</h3>
      <span>{date}</span>
    </div>
  );
};

export default HistoryDate;
