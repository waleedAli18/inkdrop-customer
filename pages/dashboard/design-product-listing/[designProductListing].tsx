"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import CustomHomeHeadingButton from "../../../components/uiComponents/CustomHomeHeadingButton";
import CustomButton from "../../../components/uiComponents/CustomButton/CustomButton";
import CustomHeading from "../../../components/uiComponents/CustomHeading/CustomHeading";
import CustomRow from "../../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../../components/uiComponents/CustomColumn/CustomColumn";
import {
  AUTHENTICATED_ROUTES,
  UNAUTHENTICATED_ROUTES,
} from "../../../utils/constants/routes.constant";
import CustomAssociatedProductsCard from "../../../components/uiComponents/CustomAssociatedProductsCard";
import CustomArtCard from "../../../components/uiComponents/CustomArtCard";
import { designCardData } from "../../../utils/data/home.data";
import { associatedProductsData } from "../../../utils/data/associated-products.data";
import DashboardLayout from "../../../layout/DashboardLayout";
import CustomModal from "../../../components/uiComponents/CustomModal/CustomModal";
import deleteIcon from "../../../assets/images/delete-circle-transparent.png";
import "./design-product-listing.scss";

const DesignProductListing: React.FC = () => {
  const router = useRouter();
  const { designProductListing } = router.query;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <DashboardLayout>
      <CustomHomeHeadingButton
        right={
          <Link
            className="button"
            href={`${AUTHENTICATED_ROUTES.MY_DASHBOARD}${AUTHENTICATED_ROUTES.ADD_ARTWORK}`}
          >
            Add New Artwork
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
                  handleClick={() => console.log(filteredCardItem)}
                />
              ))}
        </CustomColumn>
      </CustomRow>
      <CustomRow>
        <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24}>
          <CustomHeading className="small left my-4">
            Associated Products
          </CustomHeading>
          <div className="associateCardWrapper mb-5">
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
                  link={`${AUTHENTICATED_ROUTES.MY_DASHBOARD}/${AUTHENTICATED_ROUTES.CUSTOMIZE_PRODUCT}/${designProductListing}`}
                  deleteButton={true}
                  onDeleteClick={() => showModal()}
                ></CustomAssociatedProductsCard>
              </motion.div>
            ))}
          </div>
        </CustomColumn>

        {/* Modal */}
        <CustomModal
          open={isModalVisible}
          centered
          onCancel={handleModalClose}
          width="500px"
          className="deleteProductModal"
          footer={null}
          closable={false}
        >
          <div className="text-center">
            <Image src={deleteIcon} alt="Delete" height={140} width={140} />
            <CustomHeading>Delete Product</CustomHeading>
            <p>Are you sure you want to delete this product?</p>
          </div>
          <div className="text-center mt-4 aside">
            <CustomButton onClick={() => handleModalClose()}>Yes</CustomButton>
            <CustomButton onClick={() => handleModalClose()}>No</CustomButton>
          </div>
        </CustomModal>
      </CustomRow>
    </DashboardLayout>
  );
};

export default DesignProductListing;
