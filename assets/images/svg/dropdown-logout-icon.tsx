import React, { memo, ReactNode } from "react";

interface DropdownLogoutIconProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const DropdownLogoutIcon: React.FC<DropdownLogoutIconProps> = (props) => {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4444 6.17545V3.731C14.4444 3.0827 14.1869 2.46094 13.7285 2.00252C13.2701 1.5441 12.6483 1.28656 12 1.28656H3.44444C2.79614 1.28656 2.17438 1.5441 1.71596 2.00252C1.25754 2.46094 1 3.0827 1 3.731V18.3977C1 19.046 1.25754 19.6677 1.71596 20.1262C2.17438 20.5846 2.79614 20.8421 3.44444 20.8421H12C12.6483 20.8421 13.2701 20.5846 13.7285 20.1262C14.1869 19.6677 14.4444 19.046 14.4444 18.3977V15.9532"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33301 11.0643H22.9997M22.9997 11.0643L19.333 7.39767M22.9997 11.0643L19.333 14.731"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(DropdownLogoutIcon);
