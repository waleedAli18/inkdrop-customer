"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { Rate } from "antd";
import HomeLayout from "../../layout/HomeLayout";
import Image from "next/image";
import Link from "next/link";
import CustomHomeHeadingButton from "../../components/uiComponents/CustomHomeHeadingButton";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import CustomHeading from "../../components/uiComponents/CustomHeading/CustomHeading";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import {
  AUTHENTICATED_ROUTES,
  UNAUTHENTICATED_ROUTES,
} from "../../utils/constants/routes.constant";
import CustomTab from "../../components/uiComponents/CustomTab/CustomTab";
import CustomDivider from "../../components/uiComponents/CustomDivider/CustomDivider";
import ProductTab from "../../components/customComponents/CustomProductTab/CustomProductTab";
import CustomContainer from "../../components/uiComponents/CustomContainer";
import { productsCardsData } from "../../utils/data/home.data";
import ImageEdit from "../../components/customComponents/ImageEdit";
import { associatedProductsData } from "../../utils/data/associated-products.data";
import image from "../../assets/images/logo.png";
import productImage from "../../assets/images/product-4.png";
import CustomQuantityInput from "../../components/uiComponents/CustomQuantityInput/CustomQuantityInput";
import CustomSelect from "../../components/uiComponents/CustomSelect/CustomSelect";
import {
  COLOR_OPTIONS,
  IMAGE_POSITION,
  IMAGE_SCALE,
  PRODUCT_FEATURES,
  SHIRT_SIZE,
} from "../../utils/data/customize-product.data";
import SizeSelector from "../../components/customComponents/SizeSelector";
import ColorSelector from "../../components/customComponents/ColorSelector";
import "./CustomizeProduct.scss";

const CustomizeProduct: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(10);
  const router = useRouter();
  const { designProductListing } = router.query;
  // const [tabKey, setTabKey] = useState("");

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

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
  };

  const tabItems = [
    {
      label: "T-Shirts",
      key: "t-shirts",
      children: <ProductTab category="t-shirt" products={productsCardsData} />,
    },
    {
      label: "Hats",
      key: "hats",
      children: <ProductTab category="hat" products={productsCardsData} />,
    },
    {
      label: "Stickers",
      key: "stickers",
      children: <ProductTab category="sticker" products={productsCardsData} />,
    },
  ];

  {
    console.log(associatedProductsData);
  }
  return (
    <HomeLayout>
      <CustomContainer>
        <CustomHomeHeadingButton
          left={<CustomButton onClick={() => router.back()}>Back</CustomButton>}
          right={
            <Link href={AUTHENTICATED_ROUTES.MY_DASHBOARD} className="button">
              Sell your design
            </Link>
          }
        />

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
                <div className="aside">
                  <h4>Size</h4>
                  <SizeSelector
                    selectedSize={selectedSize}
                    onSelectSize={handleSizeSelection}
                    size={SHIRT_SIZE}
                  />
                </div>

                {/*  <div>
                <InputNumber
                  min={0}
                  max={100}
                  defaultValue={imageSize}
                  onChange={handleImageSizeChange}
                />
              </div>

              <Slider
                value={imageSize}
                onChange={handleImageSizeChange}
                min={10}
                max={100}
                step={5}
                tooltipVisible
                tipFormatter={(value) => `${value}%`}
              />

              <Slider
                value={scale}
                onChange={handleScaleChange}
                min={10}
                max={100}
                step={5}
                tooltipVisible
                tipFormatter={(value) => `${value}%`}
              />

              <Slider
                value={positionX}
                onChange={handlePositionXChange}
                min={-100}
                max={100}
                step={1}
                tooltipVisible
                tipFormatter={(value) => `${value}%`}
              />

              <Slider
                value={positionY}
                onChange={handlePositionYChange}
                min={-100}
                max={100}
                step={1}
                tooltipVisible
                tipFormatter={(value) => `${value}%`}
              /> */}
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

              <div className="productFeatures">
                <div className="aside">
                  <h4>Product Features</h4>

                  <>
                    <div className="review">
                      <Rate
                        disabled
                        allowHalf
                        value={4.5}
                        style={{ color: "#F7941D" }}
                      />
                      <p>4.5 (1209 reviews)</p>
                    </div>
                  </>
                </div>
                <ul>
                  {PRODUCT_FEATURES.items.map((list, index) => (
                    <li key={list.id}>
                      {`${index + 1}.`} {list.text}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={UNAUTHENTICATED_ROUTES.CART} className="button mt-5">
                Add to Cart
              </Link>
            </>
          }
        ></ImageEdit>

        <CustomDivider className="my-5" />
        <CustomHomeHeadingButton
          content={<CustomHeading>Find your perfect masterpiece</CustomHeading>}
        />

        <CustomColumn>
          <CustomTab
            animated
            type="line"
            centered
            defaultActiveKey={"t-shirts"}
            items={tabItems}
          />
          <div className="text-center mt-5 mb-3 load-more">
            <CustomButton>View More</CustomButton>
          </div>
        </CustomColumn>
      </CustomContainer>
    </HomeLayout>
  );
};

export default CustomizeProduct;
