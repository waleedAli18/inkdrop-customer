"use client";

import React, { useState } from "react";
import { Form } from "antd";
import Link from "next/link";
import HomeLayout from "../../layout/HomeLayout";
import CustomHomeHeadingButton from "../../components/uiComponents/CustomHomeHeadingButton";
import CustomButton from "../../components/uiComponents/CustomButton/CustomButton";
import CustomHeading from "../../components/uiComponents/CustomHeading/CustomHeading";
import CustomColumn from "../../components/uiComponents/CustomColumn/CustomColumn";
import CustomTab from "../../components/uiComponents/CustomTab/CustomTab";
import CustomDivider from "../../components/uiComponents/CustomDivider/CustomDivider";
import ProductTab from "../../components/customComponents/CustomProductTab/CustomProductTab";
import { productsCardsData } from "../../utils/data/home.data";
import CustomRow from "../../components/uiComponents/CustomRow/CustomRow";
import CustomForm from "../../components/uiComponents/CustomForm/CustomForm";
import CustomFormItem from "../../components/uiComponents/CustomFormItem/CustomFormItem";
import CustomInput from "../../components/uiComponents/CustomInput/CustomInput";
import CustomInputNumber from "../../components/uiComponents/CustomInputNumber/CustomInputNumber";
import CustomRadioButtonGroup from "../../components/uiComponents/CustomRadioButtonGroup";
import { PAYMENT_OPTIONS } from "../../utils/constants/app.constant";
import CustomContainer from "../../components/uiComponents/CustomContainer";
import CustomDatePicker from "../../components/uiComponents/CustomDatePicker/CustomDatePicker";
import { UNAUTHENTICATED_ROUTES } from "../../utils/constants/routes.constant";
import "./paymentDetails.scss";

interface deliveryDetailsInterface {
  name: string;
  address: string;
  email: string;
  phone: number;
}

interface paymentDetailsInterface {
  nameOnCard: string;
  expiryDate: string;
  cardNo: number;
  cvv: number;
}

const Checkout: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(10);
  const [selectedPayment, setSelectedPayment] = useState<string>("credit-card");
  const [form] = Form.useForm();

  const [form1] = Form.useForm<deliveryDetailsInterface>();
  const [form2] = Form.useForm<paymentDetailsInterface>();

  const [formData1, setFormData1] = useState<deliveryDetailsInterface>({
    name: "",
    address: "",
    email: "",
    phone: 0,
  });
  const [formData2, setFormData2] = useState<paymentDetailsInterface>({
    nameOnCard: "",
    cardNo: 0,
    expiryDate: "",
    cvv: 0,
  });

  const handleSubmit = () => {
    const formData1 = form1.getFieldsValue() as deliveryDetailsInterface;
    const formData2 = form2.getFieldsValue() as paymentDetailsInterface;

    console.log("Delivery Details:", formData1);
    console.log("Payment Details:", formData2);
  };

  const disabledDate = (current: any) => {
    // Disable old dates
    return current && current < new Date().setHours(0, 0, 0, 0);
  };

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
          content={<CustomHeading>Delivery Details</CustomHeading>}
        />
        <div className="authSec checkoutFormWrapper">
          <div className="innerWrapper">
            <CustomForm
              initialValues={{ remember: true }}
              form={form1}
              onFinish={(values: deliveryDetailsInterface) =>
                setFormData1(values)
              }
              name="checkoutForm"
              // form={form}
              // onFinish={onFinish}
              className=" gx-form-row0"
            >
              <CustomRow>
                <CustomColumn xl={12} lg={12} md={24} sm={24} xs={24}>
                  <CustomFormItem
                    name="name"
                    label="Name"
                    colon={true}
                    className="with-label"
                    validateTrigger="onBlur"
                    rules={[
                      {
                        required: true,
                        message: "Name is required.",
                      },

                      {
                        max: 100,
                      },
                    ]}
                  >
                    <CustomInput placeholder="Enter your name" />
                  </CustomFormItem>
                </CustomColumn>

                <CustomColumn xl={12} lg={12} md={24} sm={24} xs={24}>
                  <CustomFormItem
                    name="address"
                    label="Address"
                    colon={true}
                    className="with-label"
                    validateTrigger="onBlur"
                    rules={[
                      {
                        required: true,
                        message: "Address is required.",
                      },

                      {
                        max: 100,
                      },
                    ]}
                  >
                    <CustomInput placeholder="Enter your address" />
                  </CustomFormItem>
                </CustomColumn>

                <CustomColumn xl={12} lg={12} md={24} sm={24} xs={24}>
                  <CustomFormItem
                    name="email"
                    label="Email"
                    colon={true}
                    className="with-label"
                    validateTrigger="onBlur"
                    rules={[
                      {
                        required: true,
                        message: "Email Address is required.",
                      },
                      { type: "email", message: "Email Address is invalid." },
                      {
                        max: 320,
                      },
                    ]}
                  >
                    <CustomInput placeholder="Enter your email address" />
                  </CustomFormItem>
                </CustomColumn>

                <CustomColumn xl={12} lg={12} md={24} sm={24} xs={24}>
                  <CustomFormItem
                    name="phone"
                    label="Phone"
                    colon={true}
                    className="with-label"
                    validateTrigger="onBlur"
                    rules={[
                      {
                        required: true,
                        message: "Phone number is required.",
                      },
                    ]}
                  >
                    <CustomInputNumber placeholder="Enter your number" />
                  </CustomFormItem>
                </CustomColumn>
              </CustomRow>
            </CustomForm>
          </div>

          <CustomHomeHeadingButton
            className="mt-5"
            content={<CustomHeading>Payment Details</CustomHeading>}
          />

          <div className="innerWrapper">
            <CustomRadioButtonGroup
              options={PAYMENT_OPTIONS}
              onChange={(e) => setSelectedPayment(e)}
              defaultValue="credit-card"
            />

            <CustomForm
              initialValues={{ remember: true }}
              name="paymentDetailsForm"
              form={form2}
              onFinish={(values: paymentDetailsInterface) =>
                setFormData2(values)
              }
              // form={form}
              // onFinish={onFinish}
              className=" gx-form-row0"
            >
              <CustomRow>
                <CustomColumn xl={12} lg={12} md={24} sm={24} xs={24}>
                  <CustomFormItem
                    name={
                      selectedPayment === "credit-card"
                        ? "nameOnCard"
                        : "nameOnCard"
                    }
                    label={
                      selectedPayment === "credit-card"
                        ? "Name on Card"
                        : "Name on Card"
                    }
                    colon={true}
                    className="with-label"
                    validateTrigger="onBlur"
                    rules={[
                      {
                        required: true,
                        message: "This field is required.",
                      },
                    ]}
                  >
                    <CustomInput />
                  </CustomFormItem>
                </CustomColumn>

                <CustomColumn xl={12} lg={12} md={24} sm={24} xs={24}>
                  <CustomFormItem
                    name={
                      selectedPayment === "credit-card" ? "cardNo" : "cardNo"
                    }
                    label={
                      selectedPayment === "credit-card" ? "Card No" : "Card No"
                    }
                    colon={true}
                    className="with-label"
                    validateTrigger="onBlur"
                    rules={[
                      {
                        required: true,
                        message: "This field is required.",
                      },
                    ]}
                  >
                    <CustomInputNumber />
                  </CustomFormItem>
                </CustomColumn>

                <CustomColumn xl={12} lg={12} md={24} sm={24} xs={24}>
                  <CustomFormItem
                    name={
                      selectedPayment === "credit-card"
                        ? "expiryDate"
                        : "expiryDate"
                    }
                    label={
                      selectedPayment === "credit-card"
                        ? "Expiry Date"
                        : "Expiry Date"
                    }
                    colon={true}
                    className="with-label"
                    validateTrigger="onBlur"
                    rules={[
                      {
                        required: true,
                        message: "This field is required.",
                      },
                    ]}
                  >
                    <CustomDatePicker
                      disabledDate={disabledDate}
                      showToday={false}
                      placeholder=""
                    />
                  </CustomFormItem>
                </CustomColumn>

                <CustomColumn xl={12} lg={12} md={24} sm={24} xs={24}>
                  <CustomFormItem
                    name={selectedPayment === "credit-card" ? "cvv" : "cvv"}
                    label={selectedPayment === "credit-card" ? "CVV" : "CVV"}
                    colon={true}
                    className="with-label"
                    validateTrigger="onBlur"
                    rules={[
                      {
                        required: true,
                        message: "This field is required.",
                      },
                    ]}
                  >
                    <CustomInputNumber />
                  </CustomFormItem>
                </CustomColumn>
              </CustomRow>
            </CustomForm>
          </div>

          <div className="text-center mt-5 mb-3 load-more">
            <Link
              className="button"
              href={UNAUTHENTICATED_ROUTES.ORDER_CONFIRMATION}
            >
              Proceed
            </Link>
          </div>
        </div>

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

export default Checkout;
