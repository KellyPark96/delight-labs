import { css } from "@emotion/react";
import colors from "../../styles/colors";

const ListItemImage = () => {
  return (
    <span
      css={css`
        width: 51px;
        height: 51px;
        border-radius: 8px;
        background-color: ${colors.gray400};
      `}
    />
  );
};

export default ListItemImage;
