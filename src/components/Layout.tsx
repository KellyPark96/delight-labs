import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import { css } from "@emotion/react";
import ToastList from "./Toast/ToastList";
import ToastButton from "./Toast/ToastButton";

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
      <ToastButton />
      <div id="toast-root">
        <ToastList />
      </div>
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default Layout;
