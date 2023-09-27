"use client";

import { Col, ColProps } from "antd";
import React, { memo, ReactNode } from "react";
import styles from "./CustomColumn.module.css";

interface CustomColumnProps extends ColProps {
  children?: ReactNode;
  align?: "right" | "left" | "center";
}

const CustomColumn: React.FC<CustomColumnProps> = (props) => {
  return (
    <Col
      {...props}
      className={`custom-column ${props.className} ${styles.customColumnWrapper}`}
    >
      {props.children}
    </Col>
  );
};

export default memo(CustomColumn);
