"use client";

import { Button, Form } from "antd";
import CustomForm from "../../../uiComponents/CustomForm/CustomForm";
import CustomButton from "../../../uiComponents/CustomButton/CustomButton";
import CustomFormItem from "../../../uiComponents/CustomFormItem/CustomFormItem";
import CustomInput from "../../../uiComponents/CustomInput/CustomInput";
import CustomColumn from "../../../uiComponents/CustomColumn/CustomColumn";
import "./../auth.scss";

interface FormData {
  email: string;
}

interface SignInFormProps {
  onSignInClick: () => void;
  onOtpClick: () => void;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
}

const ForgotPassword: React.FC<SignInFormProps> = ({
  onSignInClick,
  onOtpClick,
  setUserEmail,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: FormData) => {
    onOtpClick();
    setUserEmail(values?.email);
  };
  return (
    <div className="authSec forgot-password">
      <CustomColumn className="auth-col">
        <div className="authScreen">
          <div className="head">
            <h2>Forgot Password</h2>
            <p>
              Please provide your registered email address below to get the
              verification code!
            </p>
          </div>

          <CustomForm
            initialValues={{ remember: true }}
            name="basic"
            form={form}
            onFinish={onFinish}
            className="gx-signin-form gx-form-row0"
          >
            <CustomFormItem
              required={false}
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

            <CustomFormItem className="text-center mt-4">
              <CustomButton
                type="primary"
                htmlType="submit"
                className="gx-mb-0 btn"
                //   loading={loading}
              >
                Get OTP
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

export default ForgotPassword;
