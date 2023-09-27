import React from "react";

export interface AppContextInterfaceArgs {
  token?: string;
  checkbox?: boolean;
}

export interface AppContextInterface {
  appContext: AppContextInterfaceArgs;
  setAppContext?: (appContext: AppContextInterfaceArgs) => void;
}

export interface AppProviderInterface {
  children: React.ReactNode;
}

// export interface AppProviderInterface {
//   children: React.ReactNode;
// }
