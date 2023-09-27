import React, { memo, ReactNode } from "react";

interface MyDesignIconProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const MyDesignIcon: React.FC<MyDesignIconProps> = (props) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.2354 2.25342H34.9854V34.1284H0.985352V0.742676L22.2354 21.9927V2.25342ZM3.11035 32.0034H29.2246L3.11035 5.88916V32.0034ZM30.1211 29.8784L32.2461 32.0034H32.8604V4.37842H24.3604V6.50342H28.6104V8.62842H24.3604V10.7534H28.6104V12.8784H24.3604V15.0034H30.7354V17.1284H24.3604V19.2534H28.6104V21.3784H24.3604V23.5034H28.6104V25.6284H25.8711L27.9961 27.7534H30.7354V29.8784H30.1211ZM7.36035 17.7427L17.3711 27.7534H7.36035V17.7427ZM9.48535 22.8892V25.6284H12.2246L9.48535 22.8892Z"
        fill="black"
      />
    </svg>
  );
};

export default memo(MyDesignIcon);
