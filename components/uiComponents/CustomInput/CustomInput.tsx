"use client";

import { Input, InputProps } from "antd";
import React, { memo } from "react";
import styles from "./CustomInput.module.css";

interface CustomInputProps extends InputProps {
  // Any additional props we might need
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  return (
    <span className={`kl-custom-input-container ${styles.customInputWrapper}`}>
      <Input autoComplete="off" {...props} />
    </span>
  );
};

export default memo(CustomInput);
