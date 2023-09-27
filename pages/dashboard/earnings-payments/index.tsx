"use client";

import React, { useState } from "react";
import { Button, Form, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarOutlined } from "@ant-design/icons";
import DashboardLayout from "../../../layout/DashboardLayout";
import CustomHomeHeadingButton from "../../../components/uiComponents/CustomHomeHeadingButton";
import CustomHeading from "../../../components/uiComponents/CustomHeading/CustomHeading";
import CustomColumn from "../../../components/uiComponents/CustomColumn/CustomColumn";
import CustomRow from "../../../components/uiComponents/CustomRow/CustomRow";
import CustomForm from "../../../components/uiComponents/CustomForm/CustomForm";
import CustomFormItem from "../../../components/uiComponents/CustomFormItem/CustomFormItem";
import CustomInput from "../../../components/uiComponents/CustomInput/CustomInput";
import CustomButton from "../../../components/uiComponents/CustomButton/CustomButton";
import CustomModal from "../../../components/uiComponents/CustomModal/CustomModal";
import CustomDashboardStatistic from "../../../components/customComponents/CustomDashboardCard/CustomDashboardStatistic";
import cardImage1 from "../../../assets/images/circle-cash.png";
import fetchIcon from "../../../assets/images/fetch.png";
import CustomTable from "../../../components/customComponents/CustomTable/CustomTable";
import {
  BANK_DETAILS,
  MyEarningsData,
} from "../../../utils/data/my-earnings.data";
import { EarningTableInterface } from "../../../interface/earnings.interface";
import { LOCAL_DATE_FORMAT } from "../../../utils/constants/app.constant";
import EnterPassword from "../../../components/layouts/earningsPayments/EnterPassword";
import RequestPayout from "../../../components/layouts/earningsPayments/RequestPayout";
import "./earningsPayments.scss";

const EarningsPayments: React.FC = () => {
  const [form] = Form.useForm();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [enterPasswordModal, setEnterPasswordModal] = useState(false);
  const [requestPayout, setRequestPayout] = useState(false);
  const [bankDetails, setBankDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editBankDetails, setEditBankDetails] = useState(false);
  const [pageSize, setPageSize] = useState(5);

  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    profilePicture: File | null;
  }

  interface BankFieldsInterface {
    accountTitle: string;
    bankName: string;
    accountNo: string;
    routingNo: string;
  }

  const handleImageChange = (file: File | null) => {
    setSelectedImage(file);
  };

  const handleModalClose = () => {
    if (enterPasswordModal) {
      setEnterPasswordModal(false);
    }
    if (requestPayout) {
      setRequestPayout(false);
    }
    if (editBankDetails) {
      setEditBankDetails(false);
    }
  };

  const formValues = async (values: any) => {
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

  const onEditBankDetails = async (values: BankFieldsInterface) => {
    const formData = new FormData();
    formData.append("accountTitle", values.accountTitle);
    formData.append("bankName", values.bankName);
    formData.append("accountNo", values.accountNo);
    formData.append("routingNo", values.routingNo);

    console.log("formData", values);
    setEditBankDetails(false);
  };

  const handleListingCallback = (pagination) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  const pagination = {
    current: currentPage,
    pageSize: pageSize,
    total: MyEarningsData.length,
    onChange: handleListingCallback,
  };

  const columns: EarningTableInterface[] = [
    {
      title: "S.No",
      key: "id",
      render: (res) => res?.id,
    },
    {
      title: "Amount",
      key: "amount",
      render: (res) => `$${res?.amount ? res?.amount : "--"}`,
    },
    {
      title: "Date Requested",
      key: "dateRequested",
      render: (res) =>
        ` ${moment(res.dateRequested)
          .format(LOCAL_DATE_FORMAT)
          .toLocaleString()}`,
    },

    {
      title: "Date Transferred",
      key: "dateTransferred",
      render: (res) =>
        `${moment(res.dateTransferred)
          .format(LOCAL_DATE_FORMAT)
          .toLocaleString()}`,
    },

    {
      title: "Status",
      width: "12%",
      key: "status",
      className: "statusCol",
      render: (res) => (
        <span className={`statusBox ${res.status}`}>
          {res.status.replace("-", " ")}
        </span>
      ),
    },
  ];

  const enterPasswordForm = [
    {
      name: "password",
      rules: [{ required: true, message: "Password is required" }],
    },
    // Add more form fields as needed for Modal 1
  ];

  return (
    <DashboardLayout>
      {bankDetails ? (
        <>
          <CustomHomeHeadingButton
            left={<CustomHeading>Bank Details</CustomHeading>}
            right={
              <>
                <Link
                  className="link"
                  onClick={() => setBankDetails(false)}
                  href="#"
                >
                  Back to page
                </Link>
              </>
            }
          />

          <AnimatePresence>
            <motion.div
              className="authSec bankDetailsForm"
              initial={{ scale: 1, x: -100 }}
              animate={{ scale: 1, x: 0 }}
              exit={{ scale: 1, x: -100 }}
            >
              <div className="innerWrapper">
                <CustomForm
                  initialValues={{ remember: true }}
                  name="bankDetailsForm"
                  form={form}
                  // onFinish={formValues}
                  className=" gx-form-row0"
                >
                  <CustomRow>
                    <CustomColumn
                      xl={12}
                      lg={12}
                      md={24}
                      sm={24}
                      xs={24}
                      className="left"
                    >
                      <CustomFormItem
                        name="acountTitle"
                        colon={true}
                        className="with-label"
                        validateTrigger="onBlur"
                        rules={[
                          {
                            required: false,
                            message: "Account title is required.",
                          },
                        ]}
                      >
                        <CustomInput
                          placeholder="Account Title"
                          defaultValue={BANK_DETAILS.accountTitle}
                          disabled
                        />
                      </CustomFormItem>
                    </CustomColumn>

                    <CustomColumn
                      xl={12}
                      lg={12}
                      md={24}
                      sm={24}
                      xs={24}
                      className="right"
                    >
                      <CustomFormItem
                        name="bankName"
                        colon={true}
                        className="with-label"
                        validateTrigger="onBlur"
                        rules={[
                          {
                            required: false,
                            message: "Bank name is required.",
                          },

                          {
                            max: 100,
                          },
                        ]}
                      >
                        <CustomInput
                          placeholder="Bank Name"
                          defaultValue={BANK_DETAILS.bankName}
                          disabled
                        />
                      </CustomFormItem>
                    </CustomColumn>

                    <CustomColumn
                      xl={12}
                      lg={12}
                      md={24}
                      sm={24}
                      xs={24}
                      className="left"
                    >
                      <CustomFormItem
                        name="accountNo"
                        colon={true}
                        className="with-label"
                        validateTrigger="onBlur"
                        rules={[
                          {
                            required: false,
                            message: "Account number is required.",
                          },
                        ]}
                      >
                        <CustomInput
                          placeholder="Account No"
                          defaultValue={BANK_DETAILS.accountNumber}
                          disabled
                        />
                      </CustomFormItem>
                    </CustomColumn>

                    <CustomColumn
                      xl={12}
                      lg={12}
                      md={24}
                      sm={24}
                      xs={24}
                      className="right"
                    >
                      <CustomFormItem
                        name="routingNo"
                        colon={true}
                        className="with-label"
                        validateTrigger="onBlur"
                        rules={[
                          {
                            required: false,
                            message: "Routing number is required.",
                          },
                        ]}
                      >
                        <CustomInput
                          placeholder="Routing No"
                          defaultValue={BANK_DETAILS.routingNumber}
                          disabled
                        />
                      </CustomFormItem>
                    </CustomColumn>

                    <CustomColumn xl={12} lg={12} md={24} sm={24} xs={24}>
                      <CustomFormItem>
                        <CustomButton
                          type="primary"
                          // htmlType="submit"
                          className="gx-mb-0 btn transparent"
                          onClick={() => setEditBankDetails(true)}
                        >
                          Edit Bank Details
                        </CustomButton>
                      </CustomFormItem>
                    </CustomColumn>
                  </CustomRow>
                </CustomForm>
              </div>
            </motion.div>
          </AnimatePresence>

          <CustomModal
            open={editBankDetails}
            centered
            closable={true}
            onCancel={handleModalClose}
            width="70%"
            style={{ borderRadius: 40, overflow: "hidden" }}
            // className={styles.orderModal}
            footer={null}
          >
            <>
              <div className="authSec signUp">
                <CustomColumn className="authCol">
                  <div className="authScreen">
                    <div className="head">
                      <h2>Edit Banking Details</h2>
                    </div>
                    <CustomForm
                      initialValues={{ remember: true }}
                      name="editBankDetails"
                      form={form}
                      onFinish={onEditBankDetails}
                      className="gx-signin-form gx-form-row0"
                    >
                      <CustomRow>
                        <CustomColumn
                          xl={12}
                          lg={12}
                          md={24}
                          sm={24}
                          xs={24}
                          className="left"
                        >
                          <CustomFormItem
                            name="acountTitle"
                            label="Account Title"
                            colon={true}
                            className="with-label"
                            validateTrigger="onBlur"
                            initialValue={BANK_DETAILS.accountTitle}
                            rules={[
                              {
                                required: true,
                                message: "Account title is required.",
                              },
                            ]}
                          >
                            <CustomInput placeholder="Account Title" />
                          </CustomFormItem>
                        </CustomColumn>
                        <CustomColumn
                          xl={12}
                          lg={12}
                          md={24}
                          sm={24}
                          xs={24}
                          className="right"
                        >
                          <CustomFormItem
                            label="Bank Name"
                            name="bankName"
                            colon={true}
                            className="with-label"
                            validateTrigger="onBlur"
                            initialValue={BANK_DETAILS.bankName}
                            rules={[
                              {
                                required: true,
                                message: "Bank name is required.",
                              },
                            ]}
                          >
                            <CustomInput placeholder="Bank Name" />
                          </CustomFormItem>
                        </CustomColumn>

                        <CustomColumn
                          xl={12}
                          lg={12}
                          md={24}
                          sm={24}
                          xs={24}
                          className="left"
                        >
                          <CustomFormItem
                            label="Account No"
                            name="accountNo"
                            colon={true}
                            className="with-label"
                            validateTrigger="onBlur"
                            initialValue={BANK_DETAILS.accountNumber}
                            rules={[
                              {
                                required: true,
                                message: "Account number is required.",
                              },
                            ]}
                          >
                            <CustomInput placeholder="Account No" />
                          </CustomFormItem>
                        </CustomColumn>

                        <CustomColumn
                          xl={12}
                          lg={12}
                          md={24}
                          sm={24}
                          xs={24}
                          className="right"
                        >
                          <CustomFormItem
                            label="Routing No"
                            name="routingNo"
                            colon={true}
                            className="with-label"
                            validateTrigger="onBlur"
                            initialValue={BANK_DETAILS.routingNumber}
                            rules={[
                              {
                                required: true,
                                message: "Routing number is required.",
                              },
                            ]}
                          >
                            <CustomInput placeholder="Routing No" />
                          </CustomFormItem>
                        </CustomColumn>

                        <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24}>
                          <CustomFormItem className="text-center mt-4">
                            <CustomButton
                              type="primary"
                              htmlType="submit"
                              className="gx-mb-0 btn"
                              //   loading={}
                            >
                              Update
                            </CustomButton>
                          </CustomFormItem>
                        </CustomColumn>
                      </CustomRow>
                    </CustomForm>
                  </div>
                </CustomColumn>
              </div>
            </>
          </CustomModal>
        </>
      ) : (
        <>
          <CustomHomeHeadingButton
            left={<CustomHeading>Earnings & Payments</CustomHeading>}
            right={
              <>
                <CustomButton onClick={() => setEnterPasswordModal(true)}>
                  Bank Details
                </CustomButton>
                <CustomButton
                  onClick={() => {
                    setRequestPayout(true);
                  }}
                >
                  Request Payout
                </CustomButton>
              </>
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
                        <CustomHeading>Available Amount</CustomHeading>
                      </>
                    }
                    value={`$100`}
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
                        <div className="aside">
                          <Space align="center">
                            <Image src={cardImage1} alt="Art Works" />
                            <CustomHeading>My Earnings</CustomHeading>
                            <Button
                              className="fetchIcon"
                              onClick={() => console.log("Refetched Clicked")}
                            >
                              <Image alt="refetchIcon" src={fetchIcon}></Image>
                            </Button>
                          </Space>
                          <div>
                            <Button
                              className="filterIcon"
                              onClick={() => console.log("Filter Clicked")}
                            >
                              <Space align="center">
                                Filter:
                                <CalendarOutlined />
                              </Space>
                            </Button>
                          </div>
                        </div>
                      </>
                    }
                    value={`$5000`}
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
                        <Image src={cardImage1} alt="My Earnings" />
                        <CustomHeading>Amount Requested</CustomHeading>
                      </>
                    }
                    value={`$50`}
                  />
                </motion.div>
              </AnimatePresence>
            </CustomColumn>
          </CustomRow>

          <CustomRow>
            <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24}>
              <CustomHomeHeadingButton
                className="mb-3 mt-5"
                left={<CustomHeading>My Earnings Listing</CustomHeading>}
              />

              <CustomTable
                data={MyEarningsData}
                columns={columns}
                pagination={pagination}
                listingCallback={handleListingCallback}
              />
            </CustomColumn>
          </CustomRow>

          {/* Enter Password Modal */}
          <CustomModal
            open={enterPasswordModal || requestPayout}
            centered
            closable={true}
            onCancel={handleModalClose}
            style={{ borderRadius: 0, overflow: "hidden" }}
            // className={styles.orderModal}
            footer={null}
          >
            <>
              {enterPasswordModal && (
                <EnterPassword
                  formFields={enterPasswordForm}
                  onFinish={(values) => {
                    console.log(values, "Password"),
                      setEnterPasswordModal(false);
                    setBankDetails(true);
                  }}
                  title="Enter Password"
                  buttonText="Enter"
                />
              )}

              {requestPayout && (
                <RequestPayout
                  title="Request Payout"
                  buttonText="Send Request"
                  onFinish={(value) =>
                    console.log(value, "Request Payout Clicked")
                  }
                />
              )}
            </>
          </CustomModal>
        </>
      )}
    </DashboardLayout>
  );
};

export default EarningsPayments;
