"use client";

import React, { useState } from "react";
import { AppContextInterfaceArgs, AppProviderInterface } from "../interface";
import { AppContext, context } from "./Context";

export const AppProvider = ({ children }: AppProviderInterface) => {
  const [appContext, setAppContext] =
    useState<AppContextInterfaceArgs>(context);
  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      {children}
    </AppContext.Provider>
  );
};
