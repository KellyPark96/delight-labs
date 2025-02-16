import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import { css } from "@emotion/react";
import ToastList from "./ToastList";
import ToastTest from "./ToastTest";

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
      <ToastTest />
      <div id="toast-root">
        <ToastList />
      </div>
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default Layout;
