"use client";

import { TimePicker, TimePickerProps } from "antd";
import React, { memo } from "react";

interface CustomTimePickerProps extends TimePickerProps {
  // Define any additional props you might need
}

const CustomTimePicker: React.FC<CustomTimePickerProps> = (props) => {
  return (
    <span className="custom-timepicker">
      <TimePicker {...props} />
    </span>
  );
};

export default memo(CustomTimePicker);
