import { createContext } from "react";
import { AppContextInterface, AppContextInterfaceArgs } from "../interface";

export const context: AppContextInterfaceArgs = {
  token: "",
  checkbox: false,
};

// const setState = (value: AppContextInterface) => {
//   setCookies("context", value);
//   setAppState(value);
// };

export const AppContext = createContext<AppContextInterface>({
  appContext: context,
});
