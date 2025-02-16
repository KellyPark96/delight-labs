export type dataResponseType = {
  amount: string;
  name: string;
  timestamp: string;
  type: string;
};

/* Graph */
export type GraphPropType = {
  isLoading: boolean | undefined;
  initGraphData: dataResponseType[];
  state: [dataResponseType[], React.Dispatch<React.SetStateAction<any>>];
};

export type GraphTabType = "week" | "month";
export type TransactionTabType = "all" | "expense" | "income";

export type GraphTabPropsType = {
  tabs: { value: GraphTabType; label: string }[];
  state: [string, React.Dispatch<React.SetStateAction<any>>];
};

/* Transaction */
export type HistoryPropType = {
  isLoading: boolean | undefined;
  initTransactionData: dataResponseType[];
  state: [dataResponseType[], React.Dispatch<React.SetStateAction<any>>];
};

export type TransactionTabPropsType = {
  tabs: { value: TransactionTabType; label: string }[];
  state: [string, React.Dispatch<React.SetStateAction<any>>];
};
