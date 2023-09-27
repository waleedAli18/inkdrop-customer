"use client";

import React, { FC } from "react";
import { Spin } from "antd";

interface FullScreenLoaderProps {
  // Add additional props here if needed
}

const FullScreenLoader: FC<FullScreenLoaderProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      loading123
      <Spin {...props} />
    </div>
  );
};

export default FullScreenLoader;
