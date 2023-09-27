"use client";

import { Form } from "antd";
import CustomForm from "../../../uiComponents/CustomForm/CustomForm";
import CustomButton from "../../../uiComponents/CustomButton/CustomButton";
import CustomFormItem from "../../../uiComponents/CustomFormItem/CustomFormItem";
import CustomPassword from "../../../uiComponents/CustomPassword/CustomPassword";
import CustomColumn from "../../../uiComponents/CustomColumn/CustomColumn";
import "./../auth.scss";

interface FormData {
  password: string;
  confirmPassword: string;
}

interface ResetPasswordFormProps {
  onSignInClick: () => void;
  userEmail: string;
}

const ResetPassword: React.FC<ResetPasswordFormProps> = ({
  userEmail,
  onSignInClick,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: FormData) => {
    console.log(`values`, values);
    console.log(`user email`, userEmail);
    onSignInClick();
  };

  const validateConfirmPassword = (_: any, value: string) => {
    if (!value || form.getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject("The two passwords do not match!");
  };

  return (
    <div className="authSec resetPassword">
      <CustomColumn className="authCol">
        <div className="authScreen">
          <div className="head">
            <h2>Reset Password</h2>
            <p>Set Your New Password</p>
          </div>
          <CustomForm
            initialValues={{ remember: true }}
            name="resetPasswordForm"
            form={form}
            onFinish={onFinish}
            className="gx-signin-form gx-form-row0"
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

            <CustomFormItem
              validateTrigger="onBlur"
              className="with-label"
              label="New Password"
              name="newPassword"
              colon={false}
              rules={[
                {
                  required: true,
                  message: "New Password is required.",
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
              <CustomPassword placeholder="Enter Your New Password" />
            </CustomFormItem>

            <CustomFormItem className="text-center mt-4">
              <CustomButton
                type="primary"
                htmlType="submit"
                className="gx-mb-0 btn"
                //   loading={}
              >
                Reset Password
              </CustomButton>
            </CustomFormItem>
          </CustomForm>
        </div>
      </CustomColumn>
    </div>
  );
};

export default ResetPassword;
