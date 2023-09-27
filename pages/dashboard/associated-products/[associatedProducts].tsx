"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomHeading from "../../../components/uiComponents/CustomHeading/CustomHeading";
import CustomRow from "../../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../../components/uiComponents/CustomColumn/CustomColumn";
import { AUTHENTICATED_ROUTES } from "../../../utils/constants/routes.constant";
import CustomAssociatedProductsCard from "../../../components/uiComponents/CustomAssociatedProductsCard";
import { associatedProductsData } from "../../../utils/data/associated-products.data";
import DashboardLayout from "../../../layout/DashboardLayout";
import CustomSwitch from "../../../components/uiComponents/CustomSwitch/CustomSwitch";
import CustomHomeHeadingButton from "../../../components/uiComponents/CustomHomeHeadingButton";
import CustomButton from "../../../components/uiComponents/CustomButton/CustomButton";
import "./associatedProducts.scss";

const DesignProductListing: React.FC = () => {
  const router = useRouter();
  const [list, setList] = useState<boolean>();
  const { associatedProducts } = router.query;

  return (
    <DashboardLayout>
      <CustomRow>
        <CustomColumn xl={24}>
          <CustomHeading className="small left my-4">
            Associated Products
          </CustomHeading>
          <div className="associateCardWrapper mb-5">
            {associatedProductsData.map((list, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <CustomAssociatedProductsCard
                  key={list.id}
                  data={list}
                  link={`${AUTHENTICATED_ROUTES.MY_DASHBOARD}/${AUTHENTICATED_ROUTES.CUSTOMIZE_PRODUCT}/${associatedProducts}`}
                  active={
                    <div className="switchWrapper">
                      <p className="inActive">In-Active</p>
                      <CustomSwitch
                        checked={list?.status}
                        onChange={(e) => {
                          const newlist = { ...list };
                          newlist.status = e;
                          setList(newlist.status);
                        }}
                      ></CustomSwitch>
                      <p className="active">Active</p>
                    </div>
                  }
                ></CustomAssociatedProductsCard>
              </motion.div>
            ))}
          </div>

          <CustomHomeHeadingButton
            className="pt-5"
            left={
              <CustomButton onClick={() => router.back()}>Back</CustomButton>
            }
            right={
              <Link
                className="button"
                href={`${AUTHENTICATED_ROUTES.MY_DASHBOARD}${AUTHENTICATED_ROUTES.MY_DESIGN}`}
              >
                Send for Approval
              </Link>
            }
          />
        </CustomColumn>
      </CustomRow>
    </DashboardLayout>
  );
};

export default DesignProductListing;
