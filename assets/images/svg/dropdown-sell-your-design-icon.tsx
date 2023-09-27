import React, { memo, ReactNode } from "react";

interface DropdownSellYourDesignIconProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const DropdownSellYourDesignIcon: React.FC<DropdownSellYourDesignIconProps> = (
  props
) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3099 19.4479L18.556 17.6696V19.2707H1.44489V16.7346H2.66711V15.7568H1.44489V11.6929H2.66711V10.7151H1.44489V6.80402H2.66711V5.82625H1.44489V2.41014L11.186 12.0962V10.3729L1.26767 0.503469C1.18219 0.417285 1.07298 0.358508 0.953972 0.334632C0.834959 0.310756 0.711533 0.322863 0.599428 0.369409C0.487323 0.415955 0.39162 0.494832 0.324519 0.595983C0.257418 0.697134 0.221961 0.815976 0.222667 0.937358V19.8818C0.222667 20.0439 0.287051 20.1993 0.401657 20.3139C0.516263 20.4285 0.671701 20.4929 0.833778 20.4929H19.876C19.9974 20.4936 20.1162 20.4582 20.2174 20.3911C20.3185 20.324 20.3974 20.2283 20.444 20.1162C20.4905 20.004 20.5026 19.8806 20.4787 19.7616C20.4549 19.6426 20.3961 19.5334 20.3099 19.4479Z"
        fill="black"
      />
    </svg>
  );
};

export default memo(DropdownSellYourDesignIcon);
