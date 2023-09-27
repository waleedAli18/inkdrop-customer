"use client";

import React, { memo } from "react";
import { Input } from "antd";
import { TextAreaProps } from "antd/lib/input/TextArea";
import styles from "./CustomTextarea.module.css";

const { TextArea } = Input;

interface CustomTextareaProps extends TextAreaProps {
  // Any additional props we might need
  // onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const CustomTextarea: React.FC<CustomTextareaProps> = (props) => {
  return (
    <span
      className={`kl-custom-textarea-container ${styles.customTextareaWrapper}`}
    >
      <TextArea {...props} />
    </span>
  );
};

export default memo(CustomTextarea);
