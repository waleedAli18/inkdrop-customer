"use client";

import React from "react";
import CustomRow from "../../uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../uiComponents/CustomColumn/CustomColumn";
import "./CustomHomeNavbarMessage.scss";

interface CustomHomeNavbarMessageProps {
  message?: string;
}

const CustomHomeNavbarMessage: React.FC<CustomHomeNavbarMessageProps> = (
  props
) => {
  const { message } = props;

  return (
    <CustomRow>
      <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24}>
        <div className="headerMessage">
          <p>{message ?? "Header Message!"}</p>
        </div>
      </CustomColumn>
    </CustomRow>
  );
};

export default CustomHomeNavbarMessage;
