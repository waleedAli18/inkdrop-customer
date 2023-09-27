"use client";

import { InputNumber, InputNumberProps } from "antd";
import React, { memo } from "react";
import styles from "./CustomInputNumber.module.css";

interface CustomInputNumberProps extends InputNumberProps {
  // Any additional props we might need
}

const CustomInputNumber: React.FC<CustomInputNumberProps> = (props) => {
  return (
    <span
      className={`kl-custom-input-container ${styles.customInputNumberWrapper}`}
    >
      <InputNumber autoComplete="off" {...props} />
    </span>
  );
};

export default memo(CustomInputNumber);
