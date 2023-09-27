"use client";

import React, { memo, ReactNode } from "react";
import { Select } from "antd";
import styles from "./CustomSelectOption.module.css";

const { Option } = Select;

interface CustomSelectOptionProps {
  value: string | number;
  children: ReactNode;
}

const CustomSelectOption: React.FC<CustomSelectOptionProps> = (props) => {
  return (
    <span className={`kl-custom-option-container ${styles.customSelectOption}`}>
      <Option value={props.value}>{props.children}</Option>
    </span>
  );
};

export default memo(CustomSelectOption);
