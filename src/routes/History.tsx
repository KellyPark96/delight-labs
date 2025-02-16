import { css } from "@emotion/react";
import HistoryGraph from "../components/Graph/HistoryGraph";
import RecentTransactions from "../components/RecentTransactions";
import colors from "../styles/colors";
import { useEffect, useState } from "react";
import {
  dataResponseType,
  GraphPropType,
  HistoryPropType,
} from "../types/dataType";
import { getTransactionsByDateRange } from "../utils/filterDate";
import { getRecentTransactions } from "../utils/filterHistory";

const History = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [initGraphData, setInitGraphData] = useState<dataResponseType[] | any>(
    []
  );
  const [initTransactionData, setInitTransactionData] = useState<
    dataResponseType[] | any
  >([]);
  const [graphData, setGraphData] = useState<dataResponseType[]>([]);
  const [transactionData, setTransactionData] = useState<dataResponseType[]>(
    []
  );

  useEffect(() => {
    setIsLoading(true);
    fetch("/data/mockdata.json")
      .then((res) => res.json())
      .then((result) => {
        setInitGraphData(() => getTransactionsByDateRange(result, 50));
        setGraphData(() => getTransactionsByDateRange(result, 7));
        setInitTransactionData(() => getRecentTransactions(result, 1000));
        setTransactionData(() => getRecentTransactions(result, 20));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  }, []);

  const GraphProps: GraphPropType = {
    isLoading,
    initGraphData,
    state: [graphData, setGraphData],
  };
  const HistoryProps: HistoryPropType = {
    isLoading,
    initTransactionData,
    state: [transactionData, setTransactionData],
  };

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
      <HistoryGraph {...GraphProps} />
      <RecentTransactions {...HistoryProps} />
    </div>
  );
};

export default History;
