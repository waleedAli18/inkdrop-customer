"use client";

import React, { memo, ReactNode } from "react";
import { Checkbox } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";

interface CustomCheckboxGroupProps {
  options: Array<{ label: string; value: CheckboxValueType }>;
  onChange?: (checkedValues: CheckboxValueType[]) => void;
  defaultCheckedValues?: CheckboxValueType[];
}

const CustomCheckboxGroup: React.FC<CustomCheckboxGroupProps> = ({
  options,
  onChange,
  defaultCheckedValues,
}) => {
  const handleChange = (checkedValues: CheckboxValueType[]) => {
    if (onChange) {
      onChange(checkedValues);
    }
  };

  return (
    <Checkbox.Group
      options={options}
      defaultValue={defaultCheckedValues}
      onChange={handleChange}
    />
  );
};

export default memo(CustomCheckboxGroup);
