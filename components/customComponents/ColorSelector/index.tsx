"use client";
import Image from "next/image";
import check from "../../../assets/images/check.png";
import "./colorSelector.scss";

interface ColorSelectorProps {
  selectedColors: any;
  onSelectColor: (color: string) => void;
  colorOptions: string[];
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  selectedColors,
  onSelectColor,
  colorOptions,
}) => {
  const handleColorClick = (color: string) => {
    let updatedColors: any;

    if (selectedColors.includes(color)) {
      // If the color is already selected, remove it
      updatedColors = selectedColors.filter(
        (selectedColor: string) => selectedColor !== color
      );
    } else {
      // If the color is not selected, add it
      updatedColors = [...selectedColors, color];
    }
    onSelectColor(updatedColors);
  };

  return (
    <div className="colorSelector">
      {colorOptions.map((color) => (
        <div
          key={color}
          className={`colorBox ${
            selectedColors.includes(color) ? "selected" : ""
          }`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorClick(color)}
        >
          {selectedColors.includes(color) ? (
            <Image width={23} height={17} src={check.src} alt="check" />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorSelector;
