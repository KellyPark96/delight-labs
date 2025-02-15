import { css } from "@emotion/react";
import { useState } from "react";
import MenuTab from "./MenuTab";
import { useNavigate } from "react-router-dom";

export type TabType = "home" | "payment" | "history" | "mypage";

const BottomNav = () => {
  const tabs: Array<TabType> = ["home", "payment", "history", "mypage"];
  const [tabState, setTabState] = useState<TabType>("history");
  const navigator = useNavigate();

  return (
    <div
      css={css`
        height: 67px;
        padding: 0 28px;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {tabs.map((tab) => {
        const handleClick = () => {
          if (tabState !== tab) {
            setTabState(tab);
            tab === "history" ? navigator(`/`) : navigator(`/${tab}`);
          }
        };

        return (
          <MenuTab
            key={`bottomNav-tab-${tab}`}
            menuName={tab}
            active={tabState === tab}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default BottomNav;
