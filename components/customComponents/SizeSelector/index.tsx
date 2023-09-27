import React from "react";
import { Radio, RadioChangeEvent } from "antd";
import "./sizeSelector.scss";

interface SizeSelectorProps {
  selectedSize: string;
  onSelectSize: (size: string) => void;
  size: string[];
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  selectedSize,
  onSelectSize,
  size,
}) => {
  const handleChange = (e: RadioChangeEvent) => {
    onSelectSize(e.target.value);
  };

  return (
    <Radio.Group
      onChange={handleChange}
      value={selectedSize}
      className="sizeSelectorWrapper"
    >
      {size.map((size) => (
        <Radio.Button key={size} value={size}>
          {size}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default SizeSelector;
