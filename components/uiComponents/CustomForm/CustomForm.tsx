"use client";

import { Form, FormProps } from "antd";
import React, { memo, ReactNode } from "react";
import styles from "./CustomForm.module.css";

interface CustomFormProps extends FormProps {
  children?: ReactNode;
}

const CustomForm: React.FC<CustomFormProps> = (props) => {
  return (
    <div className={`custom-form-container ${styles.customFormWrapper}`}>
      <Form {...props}>{props.children}</Form>
    </div>
  );
};

export default memo(CustomForm);
