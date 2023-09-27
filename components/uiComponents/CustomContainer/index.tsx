import React, { ReactNode } from "react";
import "./Container.scss";

interface LayoutContainerProps {
  children: ReactNode;
}

const CustomContainer: React.FC<LayoutContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default CustomContainer;
