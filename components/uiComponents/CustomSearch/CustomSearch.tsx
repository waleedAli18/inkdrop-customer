"use client";

import { Input, InputProps } from "antd";
import React, { memo } from "react";
import "./CustomSearch.scss";

interface CustomSearchProps extends InputProps {}

const CustomSearch: React.FC<CustomSearchProps> = (props) => {
  const { Search } = Input;

  return (
    <span className="kl-custom-search-container customSearchWrapper">
      <Search {...props} />
    </span>
  );
};

export default memo(CustomSearch);
