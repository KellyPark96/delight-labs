import { css } from "@emotion/react";
import colors from "../../styles/colors";
import { formatTimestamp } from "../../utils/filterDate";

type dateProps = {
  type: string;
  date: string;
};

const ToastDate = ({ type, date }: dateProps) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 21px;
        & > h3 {
          font-weight: 400;
          font-size: 14px;
          color: ${colors.white};
        }
        & > span {
          font-weight: 400;
          font-size: 14px;
          color: ${colors.white};
        }
      `}
    >
      <h3>{type}</h3>
      <span>{formatTimestamp(date)}</span>
    </div>
  );
};

export default ToastDate;
