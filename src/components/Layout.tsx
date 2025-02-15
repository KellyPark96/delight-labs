import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import { css } from "@emotion/react";

const Layout = () => {
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
      `}
    >
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default Layout;
