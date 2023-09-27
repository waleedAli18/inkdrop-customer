"use client";

import React, { memo, ReactNode } from "react";
import "./CustomHeading.scss";

interface CustomHeadingProps {
  type?: "primary" | "secondary"; // Define the available heading types
  className?: string;
  children?: ReactNode;
}

const CustomHeading: React.FC<CustomHeadingProps> = (props) => {
  const { type, className = "" } = props;
  let headingClass;

  switch (type) {
    case "secondary":
      headingClass = "second-heading";
      break;

    default:
      headingClass = "primary-heading";
      break;
  }

  return (
    <span className="kl-custom-heading customHeadingWrapper">
      <h5 {...props} className={`${headingClass} ${className}`}>
        {props.children}
      </h5>
    </span>
  );
};

export default memo(CustomHeading);
