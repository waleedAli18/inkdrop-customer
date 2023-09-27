"use client";

import React, { memo } from "react";
import { Select, SelectProps } from "antd";
import "./CustomSelect.scss";

type CustomSelectType = "small" | "middle" | "large";

interface CustomSelectProps extends SelectProps<any> {
  type?: CustomSelectType;
  // Any additional props we might need
}

const CustomSelect: React.FC<CustomSelectProps> = (props) => {
  const { type, className } = props;
  let customClass = "";
  switch (type) {
    case "small":
      customClass = "small-dropdown";
      break;
    case "middle":
      customClass = "middle-dropdown";
      break;
    case "large":
      customClass = "large-dropdown";
      break;
    default:
      break;
  }
  return (
    <span className={`kl-custom-select-container customSelectWrapper`}>
      <Select
        {...props}
        className={`${customClass} ${className}`}
        getPopupContainer={(trigger) => trigger.parentNode}
        dropdownStyle={{ position: "relative" }}
      />
    </span>
  );
};

export default memo(CustomSelect);
