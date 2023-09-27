"use client";

import React, { ReactNode, FC } from "react";
import CustomColumn from "../CustomColumn/CustomColumn";
import CustomRow from "../CustomRow/CustomRow";
import "./CustomHomeHeading.scss";

interface CustomHomeHeadingButtonProps {
  left?: ReactNode;
  right?: ReactNode;
  content?: ReactNode;
  className?: string;
}

const CustomHomeHeadingButton: FC<CustomHomeHeadingButtonProps> = ({
  left,
  right,
  content,
  className,
}) => {
  return (
    <>
      <div className={`headingButtonWrapper ${className}`}>
        <CustomRow>
          <CustomColumn
            xl={content ? 5 : 12}
            lg={content ? 5 : 12}
            md={24}
            sm={24}
            xs={24}
            className="left"
          >
            {left ?? left}
          </CustomColumn>
          {content && (
            <CustomColumn
              xl={14}
              lg={14}
              md={24}
              sm={24}
              xs={24}
              className="center"
            >
              {content ?? content}
            </CustomColumn>
          )}
          <CustomColumn
            xl={content ? 5 : 12}
            lg={content ? 5 : 12}
            md={24}
            sm={24}
            xs={24}
            className="right"
          >
            {right ?? right}
          </CustomColumn>
        </CustomRow>
      </div>
    </>
  );
};

export default CustomHomeHeadingButton;
