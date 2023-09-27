"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import HomeLayout from "../../layout/HomeLayout";
import CustomHomeHeadingButton from "../../components/uiComponents/CustomHomeHeadingButton";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import CustomHeading from "../../components/uiComponents/CustomHeading/CustomHeading";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import {
  AUTHENTICATED_ROUTES,
  UNAUTHENTICATED_ROUTES,
} from "../../utils/constants/routes.constant";
import CustomTab from "../../components/uiComponents/CustomTab/CustomTab";
import CustomDivider from "../../components/uiComponents/CustomDivider/CustomDivider";
import ProductTab from "../../components/customComponents/CustomProductTab/CustomProductTab";
import CustomAssociatedProductsCard from "../../components/uiComponents/CustomAssociatedProductsCard";
import CustomContainer from "../../components/uiComponents/CustomContainer";
import CustomArtCard from "../../components/uiComponents/CustomArtCard";
import { designCardData, productsCardsData } from "../../utils/data/home.data";
import { associatedProductsData } from "../../utils/data/associated-products.data";
import "./design-product-listing.scss";

const DesignProductListing: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(10);
  const router = useRouter();
  const { designProductListing } = router.query;

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

        <CustomRow>
          <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24}>
            {designProductListing &&
              designCardData
                .filter((cardItem) => +designProductListing === cardItem.id)
                .map((filteredCardItem) => (
                  <CustomArtCard
                    key={filteredCardItem.id}
                    data={filteredCardItem}
                    link={UNAUTHENTICATED_ROUTES.HOME}
                    handleClick={() => console.log("Card Clicked")}
                  />
                ))}
          </CustomColumn>
        </CustomRow>
        <CustomRow>
          <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24}>
            <CustomHeading className="small left my-4">
              Associated Products
            </CustomHeading>
            <div className="associateCardWrapper ">
              {associatedProductsData.map((list, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                >
                  <CustomAssociatedProductsCard
                    key={list.id}
                    data={list}
                    link={`${UNAUTHENTICATED_ROUTES.CUSTOMIZE_PRODUCT}/${designProductListing}`}
                  ></CustomAssociatedProductsCard>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-5 mb-3 load-more">
              <CustomButton>View More</CustomButton>
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

export default DesignProductListing;
