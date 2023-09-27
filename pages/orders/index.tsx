"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import HomeLayout from "../../layout/HomeLayout";
import CustomHomeHeadingButton from "../../components/uiComponents/CustomHomeHeadingButton";
import CustomHeading from "../../components/uiComponents/CustomHeading/CustomHeading";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import CustomTab from "../../components/uiComponents/CustomTab/CustomTab";
import { orderListingData } from "../../utils/data/order-listing";
import OrderTab from "../../components/customComponents/CustomOrderTab/CustomOrderTab";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import DesignCardComponent from "../../components/uiComponents/CustomDesignCard";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import CustomContainer from "../../components/uiComponents/CustomContainer";
import CustomDivider from "../../components/uiComponents/CustomDivider/CustomDivider";
import { designCardData } from "../../utils/data/home.data";
import { UNAUTHENTICATED_ROUTES } from "../../utils/constants/routes.constant";
import "./order-listing.scss";

const OrderListing = () => {
  const [visibleItems, setVisibleItems] = useState(10);
  const router = useRouter();

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
  };

  const tabItems = [
    {
      label: "All",
      key: "all",
      children: <OrderTab category="all" orders={orderListingData} />,
    },
    {
      label: "Pending",
      key: "pending",
      children: <OrderTab category="pending" orders={orderListingData} />,
    },
    {
      label: "Completed",
      key: "completed",
      children: <OrderTab category="completed" orders={orderListingData} />,
    },
  ];

  return (
    <CustomContainer>
      <CustomHomeHeadingButton
        content={<CustomHeading>Orders Listing</CustomHeading>}
      />

      <CustomColumn>
        <CustomTab
          animated
          type="line"
          centered
          defaultActiveKey={"all"}
          items={tabItems}
        />
      </CustomColumn>

      <CustomDivider className="my-5" />

      <CustomHomeHeadingButton
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
                  link={"#"}
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
    </CustomContainer>
  );
};

export default OrderListing;
OrderListing.getLayout = function getLayout(page: any) {
  return <HomeLayout>{page}</HomeLayout>;
};
