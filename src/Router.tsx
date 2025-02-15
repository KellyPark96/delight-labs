import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Payment from "./routes/Payment";
import History from "./routes/History";
import MyPage from "./routes/MyPage";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/",
        element: <History />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
    ],
  },
]);
