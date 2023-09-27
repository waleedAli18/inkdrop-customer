import React, { memo, ReactNode } from "react";

interface DashboardIconProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const DashboardIcon: React.FC<DashboardIconProps> = (props) => {
  return (
    // <span className="anticon anticon-menu ant-menu-item-icon">
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.92383 13.6021L18.4082 3.11426L31.8926 13.6021V30.083C31.8926 30.8777 31.5769 31.6399 31.0149 32.2019C30.453 32.7638 29.6908 33.0795 28.896 33.0795H7.92036C7.12563 33.0795 6.36345 32.7638 5.80149 32.2019C5.23953 31.6399 4.92383 30.8777 4.92383 30.083V13.6021Z"
        stroke="#25282B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9131 33.0793V18.0967H22.9027V33.0793"
        stroke="#25282B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    // </span>
  );
};

export default memo(DashboardIcon);
