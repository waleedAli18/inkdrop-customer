import React, { useState } from "react";
import { Tag, Tooltip } from "antd";
import "./CustomTagInput.scss";

interface CustomTagInputProps {
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
}

const CustomTagInput: React.FC<CustomTagInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleTagClose = (removedTag: string) => {
    const newValue = value?.filter((tag) => tag !== removedTag);
    if (onChange && newValue) {
      onChange(newValue);
    }
  };

  const handleInputBlur = () => {
    setShowTooltip(false);
    // Add custom logic here when the input field loses focus
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowTooltip(e.target.value.trim() !== "");
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      const trimmedValue = inputValue.trim();
      if (!value || !value.includes(trimmedValue)) {
        const newValue = Array.isArray(value)
          ? [...value, trimmedValue]
          : [trimmedValue];
        setInputValue("");
        if (onChange && newValue) {
          onChange(newValue);
        }
        setErrorMessage("");
      } else {
        setErrorMessage("Tag already exists");
        setShowTooltip(true);
      }
    }
  };

  return (
    <Tooltip
      open={showTooltip}
      title={errorMessage || "Enter a tag and press Enter to add"}
      placement="right"
      color={errorMessage ? "#ff4d4f" : "#892fc0"}
    >
      <div className="customTagInput">
        {value?.map((tag) => (
          <Tag
            key={tag}
            closable
            onClose={() => handleTagClose(tag)}
            className="custom-tag"
          >
            {tag}
          </Tag>
        ))}

        <input
          type="text"
          value={inputValue}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder={placeholder}
          className="custom-input"
        />
      </div>
    </Tooltip>
  );
};

export default CustomTagInput;
