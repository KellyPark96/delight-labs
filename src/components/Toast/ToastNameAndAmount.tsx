import { css } from "@emotion/react";
import colors from "../../styles/colors";

type NameAndPriceProps = {
  name: string;
  amount: string;
};

const ToastNameAndAmount = ({ name, amount }: NameAndPriceProps) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 24px;
        & > h3 {
          font-weight: 500;
          font-size: 16px;
          color: ${colors.white};
        }
        & > span {
          font-weight: 700;
          font-size: 16px;
          color: ${colors.white};
        }
      `}
    >
      <h3>{name}</h3>
      <span>{amount}</span>
    </div>
  );
};

export default ToastNameAndAmount;
