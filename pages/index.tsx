"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CustomHomeHeadingButton from "../components/uiComponents/CustomHomeHeadingButton";
import CustomButton from "../components/uiComponents/CustomButton/CustomButton";
import CustomHeading from "../components/uiComponents/CustomHeading/CustomHeading";
import CustomRow from "../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../components/uiComponents/CustomColumn/CustomColumn";
import DesignCardComponent from "../components/uiComponents/CustomDesignCard";
import CustomTab from "../components/uiComponents/CustomTab/CustomTab";
import CustomDivider from "../components/uiComponents/CustomDivider/CustomDivider";
import ProductTab from "../components/customComponents/CustomProductTab/CustomProductTab";
import CustomContainer from "../components/uiComponents/CustomContainer";
import {
  AUTHENTICATED_ROUTES,
  UNAUTHENTICATED_ROUTES,
} from "../utils/constants/routes.constant";
import { designCardData, productsCardsData } from "../utils/data/home.data";
import HomeLayout from "../layout/HomeLayout";
import { NextPageProps } from "../interface/common.interface";
import HomeBoxes from "../components/layouts/home/HomeBoxes";
import img1 from "../assets/images/t-shirt.png";
import img2 from "../assets/images/hats.png";
import "./home/home.scss";

const Homepage: NextPageProps = () => {
  const router = useRouter();
  const [visibleItems, setVisibleItems] = useState(10);
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Retrieve data from localStorage
      const storedValue = localStorage.getItem("authUser");
      const authUser = storedValue ? JSON.parse(storedValue) : null;
      setAuthData(authUser);
    }
  }, []);

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
    <>
      <HomeBoxes
        leftBoxProps={{
          backgroundImage: img1.src,
          heading: "Shop the best",
          categoryHeading: "T-shirts",
          onExploreClick: () => {
            console.log("left box clicked");
          },
        }}
        rightBoxProps={[
          {
            backgroundImage: img2.src,
            heading: "Shop the best",
            categoryHeading: "Hats",
            onExploreClick: () => {
              console.log("right box-1 clicked");
            },
          },
          {
            backgroundImage: img1.src,
            heading: "Shop the best",
            categoryHeading: "Stickers",
            onExploreClick: () => {
              console.log("right box-2 clicked");
            },
          },
          {
            backgroundImage: img1.src,
            heading: "Shop the best",
            categoryHeading: "Shirts",
            onExploreClick: () => {
              console.log("right box-3 clicked");
            },
          },
        ]}
      />
      <CustomContainer>
        <CustomHomeHeadingButton
          right={
            <Link href={AUTHENTICATED_ROUTES.MY_DASHBOARD} className="button">
              Sell your design
            </Link>
          }
          content={<CustomHeading>Designs as unique as you are</CustomHeading>}
        />

        <CustomRow>
          <CustomColumn xl={24}>
            <div className="designCardWrapper">
              {designCardData.slice(0, visibleItems).map((cardItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <DesignCardComponent
                    key={cardItem.id}
                    data={cardItem}
                    // link={UNAUTHENTICATED_ROUTES.HOME}
                    handleClick={() => {
                      router.push(
                        `${UNAUTHENTICATED_ROUTES.DESIGN_PRODUCT_LISTING}/${cardItem.id}`
                      );
                    }}
                  />
                </motion.div>
              ))}
            </div>
            {visibleItems < designCardData.length && (
              <>
                <div className="text-center mt-5 mb-3 load-more">
                  <CustomButton onClick={loadMore}>View More</CustomButton>
                </div>
              </>
            )}
          </CustomColumn>
        </CustomRow>
        <CustomDivider />
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
    </>
  );
};

export default Homepage;

Homepage.getLayout = function getLayout(page: any) {
  return <HomeLayout className="homePage">{page}</HomeLayout>;
};
