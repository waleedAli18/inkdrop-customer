"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeLayout from "../../layout/HomeLayout";
import CustomHomeHeadingButton from "../../components/uiComponents/CustomHomeHeadingButton";
import CustomHeading from "../../components/uiComponents/CustomHeading/CustomHeading";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import { CartData } from "../../utils/data/order-listing";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import CustomModal from "../../components/uiComponents/CustomModal/CustomModal";
import circleImage from "../../assets/images/check-circle.png";
import "./orderConfirmation.scss";
import CustomContainer from "../../components/uiComponents/CustomContainer";

const OrderConfirmation: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <HomeLayout>
      <CustomContainer>
        <CustomHomeHeadingButton
          content={<CustomHeading>Order ID # {CartData[0].id}</CustomHeading>}
        />

        <CustomRow className="orderConfirmation">
          <CustomColumn xl={14} lg={14} md={24} sm={24}>
            <div className="left">
              <div className="wrapper">
                <CustomHeading>Delivery Details</CustomHeading>
                <div className="innerCont deliveryDetails">
                  <ul>
                    <li>
                      <h4>Name:</h4>
                      <h5>{CartData[0].deliveryDetails.name}</h5>
                    </li>
                    <li>
                      <h4>Address:</h4>
                      <h5>{CartData[0].address}</h5>
                    </li>

                    <li>
                      <h4>Email:</h4>
                      <h5>{CartData[0].deliveryDetails.email}</h5>
                    </li>

                    <li>
                      <h4>Phone:</h4>
                      <h5>{CartData[0].deliveryDetails.phone}</h5>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="wrapper">
                <CustomHeading>Order Details</CustomHeading>

                {CartData[0].orderDetails.map((order, index) => (
                  <div className="innerCont orderDetails" key={index}>
                    <div className="aside">
                      <div className="img">
                        <Image
                          width={200}
                          height={200}
                          src={order?.image}
                          alt={order?.name}
                        />
                      </div>
                      <div className="content">
                        <div className="dFlex justifyContentSpaceBetween alignItemCenter">
                          <h4>Item {index + 1}</h4>
                        </div>

                        <ul>
                          <li>
                            <h4>Size</h4>
                            <h5>{order?.size}</h5>
                          </li>
                          <li>
                            <h4>Align Vertical</h4>
                            <h5>{order?.alignVertical}</h5>
                          </li>

                          <li>
                            <h4>Align Horizontal</h4>
                            <h5>{order?.alignHorizontal}</h5>
                          </li>

                          <li>
                            <h4>Image Scale</h4>
                            <h5>{order?.imageScale}</h5>
                          </li>

                          <li>
                            <h4>Position</h4>
                            <h5>{order?.position}</h5>
                          </li>

                          <li>
                            <h4>Color</h4>

                            <div
                              className="colorBox"
                              style={{ backgroundColor: order?.color }}
                            ></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="contFooter">
                      <div>
                        <h4>{order?.name}</h4>
                        <p>
                          Designed By: <Link href="#">{order?.designedBy}</Link>
                        </p>
                      </div>
                      <div className="price">
                        <h4>${order?.price}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CustomColumn>

          <CustomColumn xl={10} lg={10} md={24} sm={24}>
            <div className="right">
              <div className="wrapper">
                <div className="aside heading">
                  <CustomHeading>Payment Details</CustomHeading>
                </div>

                <div className="innerCont paymentDetails">
                  <ul className="list">
                    {CartData[0].orderDetails.map((payment, index) => (
                      <li key={index}>
                        <h4>
                          <span>Item {index + 1}</span>
                          {payment.name}
                        </h4>
                        <h5>{payment?.price}</h5>
                      </li>
                    ))}
                  </ul>

                  <div className="amountDc">
                    <ul>
                      <li>
                        <h4>Amount</h4>
                        <h4>$99.98</h4>
                      </li>
                      <li>
                        <h4>Delivery Charges</h4>
                        <h4>$108</h4>
                      </li>
                    </ul>
                  </div>
                  <div className="totalPayment">
                    <div className="aside">
                      <h4>Total Payment</h4>
                      <h4>$109.98</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CustomColumn>

          <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24}>
            <div className="text-center mt-5 mb-3 load-more">
              <CustomButton
                onClick={() => setIsModalVisible(true)}
                style={{ width: "40%" }}
              >
                Pay Now
              </CustomButton>
            </div>
          </CustomColumn>
        </CustomRow>

        <CustomModal
          open={isModalVisible}
          centered
          onCancel={handleModalClose}
          width="500px"
          className="paymentProcessedModal"
          footer={null}
          closable={false}
        >
          <div className="text-center">
            <Image src={circleImage} alt="Check" height={140} width={140} />
            <CustomHeading>Payment Processed!</CustomHeading>
            <p>
              Thank you for choosing Inkdrop. Your order #{CartData[0].id} has
              been successfully received and is now being processed. You can
              check the order details in &quot;My Orders&quot;
            </p>
          </div>
          <div className="text-center mt-4">
            <CustomButton onClick={() => setIsModalVisible(false)}>
              Done
            </CustomButton>
          </div>
        </CustomModal>
      </CustomContainer>
    </HomeLayout>
  );
};

export default OrderConfirmation;
