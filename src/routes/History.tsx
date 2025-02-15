import { css } from "@emotion/react";
import HistoryGraph from "../components/Graph/HistoryGraph";
import RecentTransactions from "../components/RecentTransactions";
import colors from "../styles/colors";
import { useEffect, useState } from "react";
// import mockdata from "../data/mockdata.json";
import { dataResponseType } from "../types/dataType";

const History = () => {
  const [response, setResponse] = useState<dataResponseType[] | any>([]);

  useEffect(() => {
    fetch("/data/mockdata.json")
      .then((res) => res.json())
      .then((result) => setResponse(result));
  }, []);

  return (
    <div
      css={css`
        flex: 1;
        padding: 44px 28px 0;
        overflow: auto;
        & > h1 {
          margin: 22px 0 20px;
          text-align: left;
          font-size: 24px;
          font-weight: 600;
          color: ${colors.black};
        }
      `}
    >
      <h1>Activity</h1>
      <HistoryGraph responseData={response} />
      <RecentTransactions responseData={response} />
    </div>
  );
};

export default History;
