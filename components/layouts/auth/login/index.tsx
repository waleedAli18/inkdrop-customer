"use client";
import React from "react";
import { Button, Form } from "antd";
import { useRouter } from "next/router";
import CustomForm from "../../../uiComponents/CustomForm/CustomForm";
import CustomButton from "../../../uiComponents/CustomButton/CustomButton";
import CustomFormItem from "../../../uiComponents/CustomFormItem/CustomFormItem";
import CustomInput from "../../../uiComponents/CustomInput/CustomInput";
import CustomPassword from "../../../uiComponents/CustomPassword/CustomPassword";
import CustomCheckbox from "../../../uiComponents/CustomCheckbox";
import CustomColumn from "../../../uiComponents/CustomColumn/CustomColumn";
import { AppContext } from "../../../../context/Context";
import { FAKE_TOKEN } from "../../../../utils/constants/app.constant";
import "./../auth.scss";

interface FormData {
  email: string;
  password: string;
}

interface SignInFormProps {
  onSignUpClick: () => void;
  onForgotPasswordClick: () => void;
  onSetModal: () => void;
}

const Login: React.FC<SignInFormProps> = ({
  onSignUpClick,
  onForgotPasswordClick,
  onSetModal,
}) => {
  const [form] = Form.useForm();
  const router = useRouter();

  const useAppContext = React.useContext(AppContext);

  const onChange = (e: boolean) => {
    console.log(e);
  };

  const onFinish = (values: FormData) => {
    // Simulate user authentication and generate a fake token
    const token = FAKE_TOKEN;

    // Save the token to local storage
    localStorage.setItem("token", token);
    localStorage.setItem("authUser", JSON.stringify(values));

    setTimeout(() => {
      onSetModal();
      router.reload();
    }, 1500);
  };

  return (
    <div className="authSec login">
      <CustomColumn className="authCol">
        <div className="authScreen">
          <div className="head">
            <h2>Sign in to your account</h2>
          </div>
          <CustomForm
            initialValues={{ remember: true }}
            name="loginForm"
            form={form}
            onFinish={onFinish}
            className="gx-signin-form gx-form-row0"
          >
            <CustomFormItem
              name="email"
              label="Email Address"
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
                  message: "password must be at least 6 characters.",
                },
              ]}
            >
              <CustomPassword
                type="password"
                placeholder="Enter Your Password"
              />
            </CustomFormItem>
            <div className="forgotPass">
              <Button onClick={onForgotPasswordClick}>Forgot password?</Button>
            </div>

            <CustomFormItem>
              <CustomCheckbox onChange={onChange}>
                Yes! I’d like to receive exclusive offers and promotional emails
                on my address.
              </CustomCheckbox>
            </CustomFormItem>
            <CustomFormItem className="text-center">
              <CustomButton
                type="primary"
                htmlType="submit"
                className="gx-mb-0 btn"
                // loading={}
              >
                Sign in
              </CustomButton>
            </CustomFormItem>
            <p className="already-have-account">
              Don&apos;t have an account?
              <Button onClick={onSignUpClick}>Signup</Button>
            </p>
          </CustomForm>
        </div>
      </CustomColumn>
    </div>
  );
};

export default Login;
