export type GraphTabType = "week" | "month";
export type TransactionTabType = "all" | "expense" | "income";

export const getStorageGraphState = () => {
  const tabState = window.localStorage.getItem("graph_tab_state");
  return !!tabState ? JSON.parse(tabState) : null;
};

export const updateStorageGraphState = (tabState: GraphTabType) => {
  const storageState = getStorageGraphState();
  if (tabState == storageState) {
    return;
  } else {
    window.localStorage.setItem("graph_tab_state", JSON.stringify(tabState));
  }
};

export const getStorageTransactionState = () => {
  const tabState = window.localStorage.getItem("transaction_tab_state");
  return !!tabState ? JSON.parse(tabState) : null;
};

export const updateStorageTransactionState = (tabState: TransactionTabType) => {
  const storageState = getStorageTransactionState();
  if (tabState == storageState) {
    return;
  } else {
    window.localStorage.setItem(
      "transaction_tab_state",
      JSON.stringify(tabState)
    );
  }
};
