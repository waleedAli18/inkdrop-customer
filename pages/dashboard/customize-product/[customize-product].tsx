"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import CustomHomeHeadingButton from "../../../components/uiComponents/CustomHomeHeadingButton";
import CustomButton from "../../../components/uiComponents/CustomButton/CustomButton";
import ImageEdit from "../../../components/customComponents/ImageEdit";
import image from "../../../assets/images/logo.png";
import productImage from "../../../assets/images/product-4.png";
import CustomQuantityInput from "../../../components/uiComponents/CustomQuantityInput/CustomQuantityInput";
import CustomSelect from "../../../components/uiComponents/CustomSelect/CustomSelect";
import {
  COLOR_OPTIONS,
  IMAGE_POSITION,
  IMAGE_SCALE,
} from "../../../utils/data/customize-product.data";
import ColorSelector from "../../../components/customComponents/ColorSelector";
import DashboardLayout from "../../../layout/DashboardLayout";
import "./CustomizeProduct.scss";

const CustomizeProduct: React.FC = () => {
  const router = useRouter();
  const { designProductListing } = router.query;

  // IMAGE EDIT
  const [imageSize, setImageSize] = useState<number>(100);
  const [alignVertical, setAlignVertical] = useState<string>("top");
  const [scale, setScale] = useState<number>(25);
  const [positionX, setPositionX] = useState<number>(0);
  const [positionY, setPositionY] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleColorSelection = (color: string) => {
    setSelectedColors([color]);
  };

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  const handleImageSizeChange = (value: number) => {
    setImageSize(value);
  };

  const handleAlignVerticalChange = (value: string) => {
    setAlignVertical(value);
  };

  const handleScaleChange = (value: number) => {
    setScale(value);
  };

  const handlePositionXChange = (value: number) => {
    setPositionX(value);
  };

  const handlePositionYChange = (value: number) => {
    setPositionY(value);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <DashboardLayout>
      <ImageEdit
        left={
          <>
            <div className="productImage">
              <Image src={productImage} alt="Product Preview"></Image>
            </div>
            <div className="productPreview">
              <Image
                src={image}
                alt="Your Image"
                style={{
                  width: `${imageSize}%`,
                  verticalAlign: alignVertical,
                  transform: `scale(${
                    scale / 100
                  }) translate(${positionX}%, ${positionY}%)`,
                }}
              />
            </div>
          </>
        }
        right={
          <>
            <div className="imageSettings">
              <h3>Image Settings</h3>
              <div className="aside">
                <h4>Align Vertical</h4>
                <CustomQuantityInput onChange={handleImageSizeChange} />
              </div>

              <div className="aside">
                <h4>Align Horizontal</h4>
                <CustomQuantityInput />
              </div>

              <div className="aside">
                <h4>Image Scale</h4>
                <CustomSelect
                  defaultValue="50%"
                  options={IMAGE_SCALE}
                  // onChange={}
                ></CustomSelect>
              </div>

              <div className="aside">
                <h4>Position</h4>
                <CustomSelect
                  defaultValue="front"
                  options={IMAGE_POSITION}
                  // onChange={}
                ></CustomSelect>
              </div>
              {/* <div className="aside">
                <h4>Size</h4>
                <SizeSelector
                  selectedSize={selectedSize}
                  onSelectSize={handleSizeSelection}
                  size={SHIRT_SIZE}
                />
              </div> */}
            </div>
            <div className="productSettings">
              <h3>Product Settings</h3>

              <div className="aside">
                <h4>Select Color</h4>
              </div>
              <ColorSelector
                selectedColors={selectedColors}
                onSelectColor={handleColorSelection}
                colorOptions={COLOR_OPTIONS}
              />
            </div>
          </>
        }
      ></ImageEdit>

      <CustomHomeHeadingButton
        left={<CustomButton onClick={() => router.back()}>Back</CustomButton>}
        right={
          <CustomButton onClick={() => router.back()}>Submit</CustomButton>
          // <Link
          //   className="button"
          //   href={`${AUTHENTICATED_ROUTES.MY_DASHBOARD}`}
          // >
          //   Submit
          // </Link>
        }
      />
    </DashboardLayout>
  );
};

export default CustomizeProduct;
