"use client";

import React, { memo, ReactNode } from "react";
import { Form, FormItemProps } from "antd";
import styles from "./CustomFormItem.module.css";

const CustomFormItem: React.FC<FormItemProps> = (props) => {
  return (
    <div
      className={`custom-form-item ${props.className ? props.className : ""} ${
        styles.formItemWrapper
      }`}
    >
      <Form.Item {...props}>{props.children}</Form.Item>
    </div>
  );
};

export default memo(CustomFormItem);
