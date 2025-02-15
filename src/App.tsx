import { RouterProvider } from "react-router-dom";
import { router } from "./Router.tsx";
import { css } from "@emotion/react";

const App = () => {
  return (
    <div
      css={css`
        position: relative;
        margin: 0 auto;
      `}
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
