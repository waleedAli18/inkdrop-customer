"use client";

import React, { useState } from "react";
import { Form } from "antd";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import DashboardLayout from "../../../layout/DashboardLayout";
import CustomHomeHeadingButton from "../../../components/uiComponents/CustomHomeHeadingButton";
import {
  AUTHENTICATED_ROUTES,
  UNAUTHENTICATED_ROUTES,
} from "../../../utils/constants/routes.constant";
import CustomRow from "../../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../../components/uiComponents/CustomColumn/CustomColumn";
import { designCardData } from "../../../utils/data/home.data";
import CustomArtCard from "../../../components/uiComponents/CustomArtCard";
import "./myDesigns.scss";

const MyDesigns: React.FC = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [enterModal, setEnterModal] = useState(false);
  const [visibleItems, setVisibleItems] = useState(10);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
  };

  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    profilePicture: File | null;
  }

  const handleModalClose = () => {
    setEnterModal(false);
  };

  const onFinish = async (values: any) => {
    console.log(values);
  };

  const onEditProfile = async (values: FormData) => {
    const formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("confirmPassword", values.confirmPassword);
    formData.append("profilePicture", values.profilePicture as File);

    console.log("formData", formData);
  };

  return (
    <DashboardLayout>
      <CustomHomeHeadingButton
        right={
          <motion.div
            initial={{ y: 500, x: -1000, opacity: 1 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
          >
            <Link
              className="button"
              href={`${AUTHENTICATED_ROUTES.MY_DASHBOARD}${AUTHENTICATED_ROUTES.ADD_ARTWORK}`}
            >
              Add New Artwork
            </Link>
          </motion.div>
        }
      />

      <CustomRow>
        <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24}>
          <div className="dashboardMyDesignWrapper">
            {designCardData.slice(0, visibleItems).map((cardItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <CustomArtCard
                  key={cardItem.id}
                  data={cardItem}
                  link={UNAUTHENTICATED_ROUTES.HOME}
                  handleClick={() => {
                    router.push(
                      `${AUTHENTICATED_ROUTES.MY_DASHBOARD}/${AUTHENTICATED_ROUTES.DESIGN_PRODUCT_LISTING}/${cardItem.id}`
                    );
                  }}
                />
              </motion.div>
            ))}
          </div>
        </CustomColumn>
      </CustomRow>
    </DashboardLayout>
  );
};

export default MyDesigns;
