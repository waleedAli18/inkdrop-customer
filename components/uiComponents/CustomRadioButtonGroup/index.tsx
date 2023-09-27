"use client";

import React, { memo } from "react";
import { Radio } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";
import "./CustomRadioButtonGroup.scss";

interface CustomRadioGroupProps {
  options: Array<{ label: string; value: string }>;
  onChange?: (selectedValue: string) => void;
  defaultValue?: string;
}

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = ({
  options,
  onChange,
  defaultValue,
}) => {
  const handleChange = (e: RadioChangeEvent) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <Radio.Group
      options={options}
      onChange={handleChange}
      defaultValue={defaultValue}
    />
  );
};

export default memo(CustomRadioGroup);
