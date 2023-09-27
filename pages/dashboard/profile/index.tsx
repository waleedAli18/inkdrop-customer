"use client";

import React, { useState } from "react";
import { Form } from "antd";
import Image from "next/image";
import DashboardLayout from "../../../layout/DashboardLayout";
import CustomHomeHeadingButton from "../../../components/uiComponents/CustomHomeHeadingButton";
import CustomHeading from "../../../components/uiComponents/CustomHeading/CustomHeading";
import CustomColumn from "../../../components/uiComponents/CustomColumn/CustomColumn";
import CustomRow from "../../../components/uiComponents/CustomRow/CustomRow";
import CustomForm from "../../../components/uiComponents/CustomForm/CustomForm";
import CustomFormItem from "../../../components/uiComponents/CustomFormItem/CustomFormItem";
import ImageUploader from "../../../components/customComponents/ImageUploader";
import CustomInput from "../../../components/uiComponents/CustomInput/CustomInput";
import CustomButton from "../../../components/uiComponents/CustomButton/CustomButton";
import CustomCheckboxGroup from "../../../components/uiComponents/CustomCheckboxGroup";
import CustomRadioButtonGroup from "../../../components/uiComponents/CustomRadioButtonGroup";
import {
  PROFILE_DISPLAYNAME,
  PROFILE_NOTIFICATIONS,
} from "../../../utils/constants/profile";
import profileImage from "../../../assets/images/profile.jpg";
import CustomModal from "../../../components/uiComponents/CustomModal/CustomModal";
import CustomPassword from "../../../components/uiComponents/CustomPassword/CustomPassword";
import "./profile.scss";

const Profile: React.FC = () => {
  const [form] = Form.useForm();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    profilePicture: File | null;
  }

  const handleImageChange = (file: File | null) => {
    setSelectedImage(file);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
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
    setIsModalVisible(false);
  };

  return (
    <DashboardLayout>
      <CustomHomeHeadingButton
        left={<CustomHeading>My Profile</CustomHeading>}
      />

      <CustomRow>
        <CustomColumn xl={24} lg={24} sm={24}>
          <div className="profileTop cont">
            <div className="contInner">
              <div className="img">
                <Image src={profileImage} alt="Profile"></Image>
              </div>
              <div className="mid">
                <h2>Alexandra Grace</h2>
                <p>john.smith@inkdrop.com</p>
              </div>
              <div className="right">
                <CustomButton onClick={() => setIsModalVisible(true)}>
                  Edit Profile
                </CustomButton>
              </div>
            </div>
          </div>
        </CustomColumn>
      </CustomRow>

      <CustomRow>
        <CustomColumn xl={24} lg={24} sm={24}>
          <CustomForm
            initialValues={{ remember: true }}
            name="profileForm"
            form={form}
            onFinish={onFinish}
            className="gx-signin-form gx-form-row0"
          >
            <CustomFormItem
              name="displayName"
              label="Display Name"
              colon={false}
              className="with-label"
              validateTrigger="onBlur"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <CustomRadioButtonGroup
                options={PROFILE_DISPLAYNAME}
              ></CustomRadioButtonGroup>
            </CustomFormItem>

            {/* <CustomFormItem
              name="allowUsersTo"
              label="Allow users to"
              colon={false}
              className="with-label"
              validateTrigger="onBlur"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <CustomCheckboxGroup
                options={ALLOW_USERS_TO}
              ></CustomCheckboxGroup>
            </CustomFormItem> */}

            {/* <CustomFormItem
              name="bio"
              label="Bio"
              colon={false}
              className="with-label"
              validateTrigger="onBlur"
              rules={[
                {
                  required: false,
                  message: "Bio is required.",
                },
              ]}
            >
              <CustomTextarea />
            </CustomFormItem> */}

            <CustomFormItem
              name="notifications"
              label="Notifications"
              colon={false}
              className="with-label"
              validateTrigger="onBlur"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <CustomCheckboxGroup
                options={PROFILE_NOTIFICATIONS}
              ></CustomCheckboxGroup>
            </CustomFormItem>

            <CustomFormItem className="text-center mt-4">
              <CustomButton
                type="primary"
                htmlType="submit"
                className="gx-mb-0 btn"
                //   loading={}
              >
                Save
              </CustomButton>
            </CustomFormItem>
          </CustomForm>
        </CustomColumn>
      </CustomRow>

      {/* Modal */}
      <CustomModal
        open={isModalVisible}
        centered
        closable={false}
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
                  <h2>Edit Profile</h2>
                </div>
                <CustomForm
                  initialValues={{ remember: true }}
                  name="editProfileForm"
                  form={form}
                  onFinish={onEditProfile}
                  className="gx-signin-form gx-form-row0"
                >
                  <CustomFormItem
                    name="profilePicture"
                    colon={false}
                    className="profilePicture"
                  >
                    <ImageUploader onChange={handleImageChange} />
                    {selectedImage && (
                      <div>
                        <Image
                          width={130}
                          height={130}
                          alt="Profile Picture"
                          src={URL.createObjectURL(selectedImage)}
                        />
                      </div>
                    )}
                  </CustomFormItem>

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
                        name="firstName"
                        label="First Name"
                        colon={false}
                        className="with-label"
                        validateTrigger="onBlur"
                        rules={[
                          {
                            required: true,
                            message: "First Name is required.",
                          },

                          {
                            max: 100,
                          },
                        ]}
                      >
                        <CustomInput placeholder="Enter First Name" />
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
                        name="lastName"
                        label="Last Name"
                        colon={false}
                        className="with-label"
                        validateTrigger="onBlur"
                        rules={[
                          {
                            required: true,
                            message: "Last Name is required.",
                          },

                          {
                            max: 100,
                          },
                        ]}
                      >
                        <CustomInput placeholder="Enter Last Name" />
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
                        name="email"
                        label="Email"
                        colon={false}
                        className="with-label"
                        validateTrigger="onBlur"
                        rules={[
                          {
                            required: true,
                            message: "Email Address is required.",
                          },
                          {
                            type: "email",
                            message: "Email Address is invalid.",
                          },
                          {
                            max: 320,
                          },
                        ]}
                      >
                        <CustomInput placeholder="Enter Your Email Address" />
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
                        validateTrigger="onBlur"
                        className="with-label"
                        label="Password"
                        name="password"
                        colon={false}
                        rules={[
                          {
                            required: true,
                            message: "Password is required.",
                          },
                          {
                            max: 100,
                          },
                          {
                            min: 6,
                            message: "Password must be at least 6 characters.",
                          },
                        ]}
                      >
                        <CustomPassword placeholder="Enter Your Password" />
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
    </DashboardLayout>
  );
};

export default Profile;
