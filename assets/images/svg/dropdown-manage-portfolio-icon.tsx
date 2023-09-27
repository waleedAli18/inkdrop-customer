import React, { memo, ReactNode } from "react";

interface DropdownManagePortfolioIconProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const DropdownManagePortfolioIcon: React.FC<
  DropdownManagePortfolioIconProps
> = (props) => {
  return (
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.1429 12.858V22.2866H1.85714V12.858M13 17.1437V13.7151M16.4286 5.14371C16.4286 5.14371 16.4286 1.71513 13 1.71513C9.57143 1.71513 9.57143 5.14371 9.57143 5.14371M1 5.14371H25V12.0008C25 12.0008 19.8571 15.4294 13 15.4294C6.14286 15.4294 1 12.0008 1 12.0008V5.14371Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(DropdownManagePortfolioIcon);
