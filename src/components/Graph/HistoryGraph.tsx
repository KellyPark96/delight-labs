import { css } from "@emotion/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";
import colors from "../../styles/colors";
import { useEffect, useState } from "react";
import { GraphTabType } from "../../utils/tabState";
import GraphTabs from "./GraphTabs";
import GraphInfoCard from "./GraphInfoCard";
import {
  getLastWeekDatas,
  getTransactionsByDateRange,
  groupTransactionsByDate,
} from "../../utils/filterDate";
import { dataResponseType } from "../../types/dataType";
import {
  amountsData,
  filterExpenseAmount,
  filterIncomeAmount,
  sortAmountsData,
} from "../../utils/formatCurrency";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export type TabProps = {
  tabs: { value: GraphTabType; label: string }[];
  state: [string, React.Dispatch<React.SetStateAction<any>>];
};

type HistoryGraphProps = {
  responseData: dataResponseType[];
};

const HistoryGraph = ({ responseData }: HistoryGraphProps) => {
  const [tabState, setTabState] = useState<GraphTabType>("week");
  const initData = getTransactionsByDateRange(responseData, 7);
  const [graphData, setGraphData] = useState<dataResponseType[]>(initData);

  useEffect(() => {
    setGraphData(initData);

    tabState === "week"
      ? setGraphData(getTransactionsByDateRange(responseData, 7))
      : setGraphData(getTransactionsByDateRange(responseData, 30));
  }, [tabState, setGraphData]);

  const TabProps: TabProps = {
    tabs: [
      { label: "Week", value: "week" },
      { label: "Month", value: "month" },
    ],
    state: [tabState, setTabState],
  };

  const options = {
    responsive: true,
    interaction: {
      intersect: false,
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
    },
  };

  const days = tabState === "week" ? 7 : 30;
  const expenseTransactions = groupTransactionsByDate(
    filterExpenseAmount(graphData),
    days
  );
  const incomeTransactions = groupTransactionsByDate(
    filterIncomeAmount(graphData),
    days
  );
  const labels = getLastWeekDatas(days);

  const data = {
    labels,
    datasets: [
      {
        label: "Expense",
        data: amountsData(sortAmountsData(expenseTransactions)),
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, colors.secondary);
          gradient.addColorStop(0.8, colors.white);
          return gradient;
        },
        borderColor: colors.secondary,
        fill: true,
      },
      {
        label: "Income",
        data: amountsData(sortAmountsData(incomeTransactions)),
        borderColor: colors.primary,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, colors.primary);
          gradient.addColorStop(0.8, colors.white);
          return gradient;
        },
        fill: true,
      },
    ],
  };

  return (
    <div>
      <GraphTabs {...TabProps} />
      <div
        css={css`
          display: flex;
          flex-direction: row;
          height: 22px;
          gap: 20px;
        `}
      >
        <GraphInfoCard color={colors.primary} texts="Income" />
        <GraphInfoCard color={colors.secondary} texts="Expense" />
      </div>
      <div
        className="graphContainer"
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default HistoryGraph;
