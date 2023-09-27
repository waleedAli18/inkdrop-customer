"use client";

import React, { memo, ReactNode } from "react";
import { Button, ButtonProps } from "antd";
import styles from "./CustomButton.module.css";

interface CustomButtonProps extends ButtonProps {
  children?: ReactNode;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return (
    <Button
      {...props}
      className={` ${
        props?.className ? props?.className : ""
      } gx-mb-0 btnStyling ${styles.buttonStyles}`}
    >
      {props.children}
    </Button>
  );
};

export default memo(CustomButton);
