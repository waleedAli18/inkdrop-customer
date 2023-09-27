import React, { memo, ReactNode } from "react";

interface SearchIconProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const SearchIcon: React.FC<SearchIconProps> = (props) => {
  return (
    <svg
      width="26"
      height="27"
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.866 20.8876C16.5069 20.8876 20.2691 17.1254 20.2691 12.4845C20.2691 7.84356 16.5069 4.08137 11.866 4.08137C7.22509 4.08137 3.46289 7.84356 3.46289 12.4845C3.46289 17.1254 7.22509 20.8876 11.866 20.8876Z"
        stroke="#892FC0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.37 22.9883L17.8008 18.4192"
        stroke="#892FC0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(SearchIcon);
