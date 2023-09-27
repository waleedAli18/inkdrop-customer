"use client";
import React, { useState, memo, ReactNode } from "react";
import { Button, InputNumber } from "antd";
import "./CustomQuantityInput.scss";

interface CustomQuantityInputProps {
  onChange?: (value: number) => void;
  children?: ReactNode;
  value?: (quantity: number) => void;
}

const CustomQuantityInput: React.FC<CustomQuantityInputProps> = (
  { onChange },
  props
) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (value: number) => {
    if (value !== null) {
      setQuantity(value);
    }
    if (onChange) {
      onChange(value);
    }
  };

  const handleDecrease = () => {
    if (quantity! >= 2) {
      setQuantity((prevQuantity) => (prevQuantity ?? 0) - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => (prevQuantity ?? 0) + 1);
  };

  return (
    <>
      <div className="quantityInputWrapper">
        <Button className="btn-left" onClick={handleDecrease}>
          -
        </Button>
        <InputNumber
          min={1}
          value={quantity}
          onChange={handleQuantityChange}
          controls={false}
          keyboard={false}
          readOnly={true}
          {...props}
        />
        <Button className="btn-right" onClick={handleIncrease}>
          +
        </Button>
      </div>
    </>
  );
};

export default memo(CustomQuantityInput);
