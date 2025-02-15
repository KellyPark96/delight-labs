import { css } from "@emotion/react";
import { TabType } from "./BottomNav";

export interface MenuTabButtonProps {
  menuName: TabType;
  active: boolean;
  onClick: () => void;
}

const MenuTab = ({ onClick, menuName, active }: MenuTabButtonProps) => {
  return (
    <button
      css={css`
        position: relative;
        width: 100%;
        height: 100%;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
      onClick={onClick}
    >
      <div
        css={css`
          & > img {
            width: 24px;
            height: 24px;
          }
        `}
      >
        {!active ? (
          <img src={`/icons/${menuName}.svg`} alt={`${menuName}`} />
        ) : (
          <img
            src={`/icons/${menuName}-active.svg`}
            alt={`${menuName}-active`}
          />
        )}
      </div>
      {active && (
        <div
          css={css`
            position: absolute;
            width: 38px;
            bottom: 0;
            border-radius: 4px 4px 0 0;
            border-color: #363062;
            border-style: solid;
            border-width: 5px 5px 0 0;
          `}
        />
      )}
    </button>
  );
};

export default MenuTab;
