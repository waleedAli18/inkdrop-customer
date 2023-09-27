"use client";

import { Statistic } from "antd";
import React, { FC, memo, ReactNode } from "react";
import "./CustomDashboardStatistic.scss";

interface CustomDashboardStatisticProps {
  className?: string;
  title?: string;
  value?: number | string;
  prefix: ReactNode;
  // Any other props we expect to receive
}

const CustomDashboardStatistic: FC<CustomDashboardStatisticProps> = ({
  className = "",
  prefix,
  ...props
}) => {
  return (
    <Statistic
      prefix={prefix}
      {...props}
      className={`customCardDashboard ${className}`}
    />
  );
};

export default memo(CustomDashboardStatistic);
