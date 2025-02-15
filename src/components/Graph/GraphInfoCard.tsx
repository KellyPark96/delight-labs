import { css } from "@emotion/react";

type GraphInfoCardType = {
  color?: string;
  texts: string;
};

const GraphInfoCard = ({ color, texts }: GraphInfoCardType) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 9px;
        & > h6 {
          font-weight: 400;
          font-size: 12px;
        }
      `}
    >
      <div
        css={css`
          width: 32px;
          height: 5px;
          background-color: ${color};
        `}
      />
      <h6>{texts}</h6>
    </div>
  );
};

export default GraphInfoCard;
