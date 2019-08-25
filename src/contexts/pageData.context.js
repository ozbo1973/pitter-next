import { createContext, useState } from "react";
import mainData from "../mainData";

export const PageDataContext = createContext();

export const PageDataContextProvider = props => {
  const [data, setData] = useState(mainData);
  const changeData = page => {
    setData(data[page]);
  };

  return (
    <PageDataContext.Provider value={{ data, changeData }}>
      {props.children}
    </PageDataContext.Provider>
  );
};
