"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Rate, Form } from "antd";
import { motion } from "framer-motion";
import {
  OrderListingDataProps,
  OrderTabProps,
} from "../../../interface/order.interface ";
import CustomModal from "../../uiComponents/CustomModal/CustomModal";
import CustomRow from "../../uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../uiComponents/CustomColumn/CustomColumn";
import CustomHeading from "../../uiComponents/CustomHeading/CustomHeading";
import CustomQuantityInput from "../../uiComponents/CustomQuantityInput/CustomQuantityInput";
import CustomForm from "../../uiComponents/CustomForm/CustomForm";
import CustomFormItem from "../../uiComponents/CustomFormItem/CustomFormItem";
import CustomTextarea from "../../uiComponents/CustomTextarea/CustomTextarea";
import "./CustomOrderTab.scss";

interface FormData {
  review: string;
  rating: number;
}

const OrderTab: React.FC<OrderTabProps> = ({ category, orders }) => {
  const [selectedOrder, setSelectedOrder] =
    useState<OrderListingDataProps | null>(null);
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const filteredOrders = orders.filter(
    (orders) => orders.category === category
  );

  const handleOrderClick = (order: OrderListingDataProps) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setSelectedOrder(null);
    setIsModalVisible(false);
  };

  const onFinish = (values: FormData) => {
    console.log(values, "values");
  };

  return (
    <div>
      {filteredOrders.map((order, index) => (
        <motion.div
          className="orderTabWrapper"
          key={order.id}
          onClick={() => handleOrderClick(order)}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <h2>Order ID # {order.id}</h2>
          <div className="cont">
            <div className="purchaseDate">
              <h4>Purchase Date</h4>
              <p>
                {order?.purchaseDate}
                <span>({order?.daysRemaining} days remaining)</span>
              </p>
            </div>
            <div className="amount">
              <h4>Amount</h4>
              <p>${order?.amount}</p>
            </div>
            <div className="address">
              <h4>Address</h4>
              <p>{order?.address}</p>
            </div>
            <div className={`status ${order?.status}`}>
              <h4>Status</h4>
              <p>{order?.status}</p>
            </div>

            <div className="review">
              <h4>Review</h4>

              {order?.review ? (
                <>
                  <Rate
                    disabled
                    allowHalf
                    defaultValue={order?.review}
                    style={{ color: "#F7941D" }}
                  />
                  {order?.review}
                </>
              ) : (
                <p> Not Reviewed </p>
              )}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Modal */}
      <CustomModal
        open={isModalVisible}
        centered
        onCancel={handleModalClose}
        width="85%"
        className="orderModal"
        footer={null}
      >
        {selectedOrder && (
          <CustomRow>
            <CustomColumn xl={24} lg={24} md={24} sm={24}>
              <div className="head">
                <CustomHeading>Order ID # {selectedOrder.id}</CustomHeading>
              </div>
            </CustomColumn>

            <CustomColumn xl={14} lg={14} md={24} sm={24}>
              <div className="left">
                <div className="wrapper">
                  <CustomHeading>Delivery Details</CustomHeading>
                  <div className="innerCont deliveryDetails">
                    <ul>
                      <li>
                        <h4>Name:</h4>
                        <h5>{selectedOrder.deliveryDetails.name}</h5>
                      </li>
                      <li>
                        <h4>Address:</h4>
                        <h5>{selectedOrder.address}</h5>
                      </li>

                      <li>
                        <h4>Email:</h4>
                        <h5>{selectedOrder.deliveryDetails.email}</h5>
                      </li>

                      <li>
                        <h4>Phone:</h4>
                        <h5>{selectedOrder.deliveryDetails.phone}</h5>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="wrapper">
                  <CustomHeading>Order Details</CustomHeading>

                  {selectedOrder.orderDetails.map((order, index) => (
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
                            <CustomQuantityInput />
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
                            Designed By:
                            <Link href="#">{order?.designedBy}</Link>
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
                    <CustomHeading>
                      Payment Details{" "}
                      <div className={`status ${selectedOrder.status}`}>
                        <p>{selectedOrder.status}</p>
                      </div>
                    </CustomHeading>
                  </div>

                  <div className="innerCont paymentDetails">
                    <ul className="list">
                      {selectedOrder.orderDetails.map((payment, index) => (
                        <li key={index}>
                          <h4>
                            <span>Item {index + 1}</span>
                            {payment.name}
                          </h4>
                          <h5>{payment?.price}</h5>
                        </li>
                      ))}
                    </ul>

                    <div className="discount">
                      <h4>Discount</h4>
                      <div className="aside">
                        <div className="price">
                          <h6>$20.00</h6>
                        </div>
                        <Button className="transparent">Apply</Button>
                      </div>
                    </div>

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

                {selectedOrder.status === "complete" && (
                  <div className="wrapper">
                    <div className="reviewWrapper">
                      <CustomHeading>Your Review</CustomHeading>
                      <CustomForm
                        initialValues={{ remember: true }}
                        name="orderReviewForm"
                        form={form}
                        onFinish={onFinish}
                        className="gx-orderReview-form gx-form-row0"
                      >
                        <CustomFormItem
                          name="rating"
                          colon={false}
                          className="with-label"
                          validateTrigger="onBlur"
                          rules={[
                            {
                              required: true,
                              message: "rating is required.",
                            },
                          ]}
                        >
                          <Rate allowHalf style={{ color: "#F7941D" }} />
                        </CustomFormItem>
                        <CustomFormItem
                          name="review"
                          colon={false}
                          className="with-label"
                          validateTrigger="onBlur"
                          rules={[
                            {
                              required: true,
                              message: "Review is required.",
                            },
                          ]}
                        >
                          <CustomTextarea />
                        </CustomFormItem>

                        <CustomFormItem className="text-center">
                          <Button
                            type="primary"
                            htmlType="submit"
                            className="gx-mb-0 btn transparent"
                            // loading={}
                          >
                            Send
                          </Button>
                        </CustomFormItem>
                      </CustomForm>
                    </div>
                  </div>
                )}
              </div>
            </CustomColumn>
          </CustomRow>
        )}
      </CustomModal>
    </div>
  );
};

export default OrderTab;
