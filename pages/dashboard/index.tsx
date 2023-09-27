"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import DashboardLayout from "../../layout/DashboardLayout";
import CustomHomeHeadingButton from "../../components/uiComponents/CustomHomeHeadingButton";
import CustomHeading from "../../components/uiComponents/CustomHeading/CustomHeading";
import CustomDashboardStatistic from "../../components/customComponents/CustomDashboardCard/CustomDashboardStatistic";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import DesignCardComponent from "../../components/uiComponents/CustomDesignCard";
import CustomDivider from "../../components/uiComponents/CustomDivider/CustomDivider";
import { designCardData } from "../../utils/data/home.data";
import {
  AUTHENTICATED_ROUTES,
  UNAUTHENTICATED_ROUTES,
} from "../../utils/constants/routes.constant";
import cardImage1 from "../../assets/images/circle-home.png";
import cardImage2 from "../../assets/images/circle-box.png";
import cardImage3 from "../../assets/images/circle-earning.png";

const Dashboard: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(5);
  const router = useRouter();

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  return (
    <DashboardLayout>
      <CustomHomeHeadingButton
        left={<CustomHeading>Dashboard</CustomHeading>}
        right={
          <Link className="link" href={UNAUTHENTICATED_ROUTES.HOME}>
            Back to page
          </Link>
        }
      />

      <CustomRow>
        <CustomColumn xl={8} lg={8} md={24} sm={24} xs={24}>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                type: "spring",
              }}
            >
              <CustomDashboardStatistic
                prefix={
                  <>
                    <Image src={cardImage1} alt="Art Works" />
                    <CustomHeading>Total Art Works</CustomHeading>
                  </>
                }
                value={58}
              />
            </motion.div>
          </AnimatePresence>
        </CustomColumn>

        <CustomColumn xl={8} lg={8} md={24} sm={24} xs={24}>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                type: "spring",
              }}
            >
              <CustomDashboardStatistic
                prefix={
                  <>
                    <Image src={cardImage2} alt="Art Works" />
                    <CustomHeading>Total Products</CustomHeading>
                  </>
                }
                value={24}
              />
            </motion.div>
          </AnimatePresence>
        </CustomColumn>

        <CustomColumn xl={8} lg={8} md={24} sm={24} xs={24}>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                type: "spring",
              }}
            >
              <CustomDashboardStatistic
                prefix={
                  <>
                    <Image src={cardImage3} alt="My Earnings" />
                    <CustomHeading>My Earnings</CustomHeading>
                  </>
                }
                value={`$510`}
              />
            </motion.div>
          </AnimatePresence>
        </CustomColumn>
      </CustomRow>

      <CustomDivider className="my-5" />

      <CustomHomeHeadingButton
        left={<CustomHeading>Recently Added</CustomHeading>}
      />
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
                  `${AUTHENTICATED_ROUTES.MY_DASHBOARD}/${AUTHENTICATED_ROUTES.DESIGN_PRODUCT_LISTING}/${cardItem.id}`
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
    </DashboardLayout>
  );
};

export default Dashboard;
