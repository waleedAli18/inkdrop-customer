"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HomeLayout from "../../layout/HomeLayout";
import CustomHomeHeadingButton from "../../components/uiComponents/CustomHomeHeadingButton";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import CustomHeading from "../../components/uiComponents/CustomHeading/CustomHeading";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import CustomTab from "../../components/uiComponents/CustomTab/CustomTab";
import CustomDivider from "../../components/uiComponents/CustomDivider/CustomDivider";
import ProductTab from "../../components/customComponents/CustomProductTab/CustomProductTab";
import { productsCardsData } from "../../utils/data/home.data";
import { CartData } from "../../utils/data/order-listing";
import CustomContainer from "../../components/uiComponents/CustomContainer";
import CustomQuantityInput from "../../components/uiComponents/CustomQuantityInput/CustomQuantityInput";
import { UNAUTHENTICATED_ROUTES } from "../../utils/constants/routes.constant";
import "./cart.scss";

const Cart: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(10);

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

  return (
    <HomeLayout>
      <CustomContainer>
        <CustomHomeHeadingButton
          content={<CustomHeading>My Cart</CustomHeading>}
        />

        <CustomRow>
          <CustomColumn xl={24} lg={24} md={24} sm={24}>
            <div className="cartWrapper">
              <div className="cont">
                {CartData.map((cart) =>
                  cart.orderDetails.map((item, index) => (
                    <motion.div
                      className="innerCont cartDetails"
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="head">
                        <h4>{item.name}</h4>
                        <p>
                          Designed by: <Link href="#">{item.designedBy}</Link>
                        </p>
                      </div>
                      <div className="aside">
                        <div className="img">
                          <Image
                            width={200}
                            height={200}
                            src={item?.image}
                            alt="asd"
                          />
                        </div>
                        <div className="content">
                          <h2>Item 0{index + 1}</h2>
                          <ul>
                            <li>
                              <span>
                                <h4>Size</h4>
                                <h5>{item?.size}</h5>
                              </span>
                              <span>
                                <h4>Image Scale</h4>
                                <h5>{item?.imageScale}</h5>
                              </span>
                            </li>
                            <li>
                              <span>
                                <h4>Align Vertical</h4>
                                <h5>{item?.alignVertical}</h5>
                              </span>
                              <span>
                                <h4>Position</h4>
                                <h5>{item?.position}</h5>
                              </span>
                            </li>

                            <li>
                              <span>
                                <h4>Align Horizontal</h4>
                                <h5>{item?.alignHorizontal}</h5>
                              </span>
                              <span>
                                <h4>Color</h4>
                                <div
                                  className="colorBox"
                                  style={{ backgroundColor: item?.color }}
                                ></div>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="price">
                          <CustomQuantityInput />
                          <h4>${item.price}</h4>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
              <div className="text-center mt-5 mb-3 load-more">
                <Link className="button" href={UNAUTHENTICATED_ROUTES.CHECKOUT}>
                  Checkout
                </Link>
              </div>
            </div>
          </CustomColumn>
        </CustomRow>

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

export default Cart;
