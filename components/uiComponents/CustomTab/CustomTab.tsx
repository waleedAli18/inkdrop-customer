"use client";

import { Tabs, TabsProps } from "antd";
import React, { memo, ReactNode } from "react";
import "./CustomTab.css";

interface CustomTabProps extends TabsProps {
  // Any additional props we might need
  children?: ReactNode;
}

const CustomTab: React.FC<CustomTabProps> = (props) => {
  return (
    <span className="kl-custom-tab-container">
      <Tabs {...props} className={` ${props.className} `} />
    </span>
  );
};

export default memo(CustomTab);
