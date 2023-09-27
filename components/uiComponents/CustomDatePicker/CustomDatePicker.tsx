"use client";
import { DatePicker } from "antd";
import React, { memo, useState } from "react";
import "./CustomDatePicker.scss";

type DatePickerProps = {
  [key: string]: any;
};
interface CustomDatePickerProps extends DatePickerProps {
  className?: string;
  disabledDate?: (current: any) => boolean;
  showToday?: boolean;
  placeholder?: string;
  onChange?: (date: any, dateString: string) => void; // Define onChange prop
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = (
  { disabledDate, showToday, placeholder, onChange },
  props
) => {
  const [selectedDate, setSelectedDate] = useState<any>(null);

  const handleDateChange = (date: any, dateString: string) => {
    setSelectedDate(date);

    if (onChange) {
      onChange(date, dateString);
    }
  };

  return (
    <span className="datepickerWrapper kl-custom-button-container">
      <DatePicker
        className={props.className}
        {...props}
        getPopupContainer={(trigger) => trigger.parentNode}
        dropdownStyle={{ position: "relative" }}
        disabledDate={disabledDate}
        showToday={showToday}
        placeholder={placeholder}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </span>
  );
};

export default memo(CustomDatePicker);
