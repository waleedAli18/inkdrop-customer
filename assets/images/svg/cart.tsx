import React, { memo, ReactNode } from "react";

interface CartIconProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const CartIcon: React.FC<CartIconProps> = (props) => {
  return (
    <svg
      width="23"
      height="26"
      viewBox="0 0 23 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.44429 1.7858L1.03027 6.33782V22.2699C1.03027 22.8735 1.27007 23.4525 1.6969 23.8793C2.12374 24.3061 2.70265 24.5459 3.30629 24.5459H19.2384C19.842 24.5459 20.4209 24.3061 20.8478 23.8793C21.2746 23.4525 21.5144 22.8735 21.5144 22.2699V6.33782L18.1004 1.7858H4.44429Z"
        stroke="#892FC0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.03027 6.33782H21.5144"
        stroke="#892FC0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8248 10.8898C15.8248 12.0971 15.3452 13.2549 14.4915 14.1086C13.6378 14.9623 12.48 15.4419 11.2727 15.4419C10.0655 15.4419 8.90763 14.9623 8.05396 14.1086C7.20029 13.2549 6.7207 12.0971 6.7207 10.8898"
        stroke="#892FC0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(CartIcon);
