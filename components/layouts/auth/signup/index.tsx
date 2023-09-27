"use client";

import React, { useState } from "react";
import { Button, Form } from "antd";
import Image from "next/image";
import CustomForm from "../../../uiComponents/CustomForm/CustomForm";
import CustomButton from "../../../uiComponents/CustomButton/CustomButton";
import CustomFormItem from "../../../uiComponents/CustomFormItem/CustomFormItem";
import CustomInput from "../../../uiComponents/CustomInput/CustomInput";
import CustomPassword from "../../../uiComponents/CustomPassword/CustomPassword";
import CustomColumn from "../../../uiComponents/CustomColumn/CustomColumn";
import ImageUploader from "../../../customComponents/ImageUploader";
import "./../auth.scss";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  profilePicture: File | null;
}

interface SignInFormProps {
  onSignInClick: () => void;
}

const SignUp: React.FC<SignInFormProps> = ({ onSignInClick }) => {
  const [form] = Form.useForm();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (file: File | null) => {
    setSelectedImage(file);
  };

  const onFinish = async (values: FormData) => {
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
    <div className="authSec signUp">
      <CustomColumn className="authCol">
        <div className="authScreen">
          <div className="head">
            <h2>Signup your account</h2>
          </div>
          <CustomForm
            initialValues={{ remember: true }}
            name="signUpForm"
            form={form}
            onFinish={onFinish}
            className="gx-signin-form gx-form-row0"
          >
            <div className="head">
              <p>
                You can inject a little more personality into your profile and
                help people recognize you across Inkdrop by uploading an avatar
                (an image, photo or other graphic icon of &quot;you&quot;).
              </p>
            </div>

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
                { type: "email", message: "Email Address is invalid." },
                {
                  max: 320,
                },
              ]}
            >
              <CustomInput placeholder="Enter Your Email Address" />
            </CustomFormItem>

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

            <CustomFormItem
              validateTrigger="onBlur"
              className="with-label"
              label="Confirm Password"
              name="confirmPassword"
              colon={false}
              rules={[
                {
                  required: true,
                  message: "Please confirm your password.",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Passwords do not match.");
                  },
                }),
              ]}
            >
              <CustomPassword placeholder="Confirm Your Password" />
            </CustomFormItem>

            <CustomFormItem className="text-center mt-4">
              <CustomButton
                type="primary"
                htmlType="submit"
                className="gx-mb-0 btn"
                //   loading={}
              >
                Sign Up
              </CustomButton>
            </CustomFormItem>
            <p className="already-have-account">
              Already have an account.
              <Button onClick={onSignInClick}>Login</Button>
            </p>
          </CustomForm>
        </div>
      </CustomColumn>
    </div>
  );
};

export default SignUp;
