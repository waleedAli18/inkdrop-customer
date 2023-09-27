"use client";

import React, { ReactNode, FC } from "react";
import CustomButton from "../../uiComponents/CustomButton/CustomButton";
import CustomColumn from "../../uiComponents/CustomColumn/CustomColumn";
import CustomRow from "../../uiComponents/CustomRow/CustomRow";

interface CustomGridViewProps {
  leftHeader?: ReactNode;
  rightHeader?: ReactNode;
  content: ReactNode;
  btnText?: string;
  btnAction?: () => void;
  btnIcon?: ReactNode;
}

const CustomGridView: FC<CustomGridViewProps> = ({
  leftHeader,
  rightHeader,
  content,
  btnText,
  btnAction,
  btnIcon,
}) => {
  return (
    <>
      {/* FILTERS & SEARCH FUNCTIONALITIES */}
      {(leftHeader || rightHeader) && (
        <div className="topHeader top-row">
          <CustomRow>
            <CustomColumn
              xl={16}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              className="search-filter"
            >
              {leftHeader}
            </CustomColumn>
            <CustomColumn
              className="topheader-btn"
              xl={8}
              lg={24}
              md={24}
              sm={24}
              xs={24}
            >
              <div className="right-header">
                <div className="aside">
                  {rightHeader}
                  {btnText && (
                    <CustomButton
                      className="deafult-btn"
                      icon={btnIcon}
                      onClick={btnAction}
                    >
                      {btnText}
                    </CustomButton>
                  )}
                </div>
              </div>
            </CustomColumn>
          </CustomRow>
        </div>
      )}

      {/* ONLY TABLE COMPONENT */}
      <div className="custom-table-grid-view-container">{content}</div>
    </>
  );
};

export default CustomGridView;
