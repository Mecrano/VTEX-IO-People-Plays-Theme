import { ChangeEvent, useState } from "react";
import { Store } from ".";

export const useNearestStore = (stores: Store[]) => {
  const [selectedStore, setSelectedStore] = useState(stores[0]);

  const handlerChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    const store = stores.find((store) => store.name === value);
    if (!store) return;
    setSelectedStore(store);
  };

  const clipboard = () => {
    navigator.clipboard.writeText(selectedStore.address);
  };

  return {
    handlerChange,
    clipboard,
    selectedStore,
  };
};
