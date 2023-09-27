"use client";

import React, { memo, ReactNode } from "react";
import { Divider, DividerProps } from "antd";
import "./CustomDivider.scss";

interface CustomDividerProps extends DividerProps {
  children?: ReactNode;
  className?: string;
}

const CustomDivider: React.FC<CustomDividerProps> = (props) => {
  return (
    <Divider
      {...props}
      className={` ${
        props?.className ? props?.className : ""
      } gx-mb-0 divider-styles`}
    >
      {props.children}
    </Divider>
  );
};

export default memo(CustomDivider);
