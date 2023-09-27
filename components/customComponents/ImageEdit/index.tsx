"use client";

import React, { ReactNode } from "react";
import { Select } from "antd";
import CustomRow from "../../uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../uiComponents/CustomColumn/CustomColumn";
import CustomHeading from "../../uiComponents/CustomHeading/CustomHeading";
import "./ImageEdit.scss";

const { Option } = Select;

interface ImageEditProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  left?: ReactNode;
  right?: ReactNode;
}

const ImageEdit: React.FC<ImageEditProps> = ({ left, right }, props) => {
  return (
    <div className="imageEditWrapper">
      <CustomRow gutter={16}>
        <CustomColumn
          span={12}
          className="left"
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
        >
          <CustomHeading>Product Preview</CustomHeading>
          {left}
        </CustomColumn>
        <CustomColumn
          span={12}
          className="right"
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
        >
          <CustomHeading>Design Your Products</CustomHeading>
          {right}
        </CustomColumn>
      </CustomRow>
    </div>
  );
};

export default ImageEdit;
