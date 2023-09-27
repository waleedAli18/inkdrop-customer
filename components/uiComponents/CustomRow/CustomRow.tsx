"use client";

import { Row, RowProps } from "antd";
import React, { memo, ReactNode } from "react";
import styles from "./customRow.module.css";

interface CustomRowProps extends RowProps {
  children: ReactNode;
}

const CustomRow: React.FC<CustomRowProps> = (props) => {
  return (
    <Row
      {...props}
      className={`custom-row ${props.className} ${styles.customRowWrapper}`}
    >
      {props.children}
    </Row>
  );
};

export default memo(CustomRow);
