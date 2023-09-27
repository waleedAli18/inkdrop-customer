"use client";

import { Tabs, TabPaneProps } from "antd";
import React, { memo, ReactNode } from "react";
import "./CustomTabPanel.module.css";

interface CustomTabPanelProps extends Omit<TabPaneProps, "animated"> {
  children?: ReactNode;
}

const CustomTabPanel: React.FC<CustomTabPanelProps> = (props) => {
  const { TabPane } = Tabs;
  return (
    <span className="kl-custom-tabpanel-container gx-w-100">
      <TabPane {...props} className={`${props.className}`}>
        {props.children}
      </TabPane>
    </span>
  );
};

export default memo(CustomTabPanel);
