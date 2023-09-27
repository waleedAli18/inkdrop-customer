import React from "react";
import { Form, Input } from "antd";
import CustomForm from "../../../uiComponents/CustomForm/CustomForm";
import CustomFormItem from "../../../uiComponents/CustomFormItem/CustomFormItem";
import CustomColumn from "../../../uiComponents/CustomColumn/CustomColumn";
import CustomButton from "../../../uiComponents/CustomButton/CustomButton";

interface EnterPasswordProps {
  open?: boolean;
  title?: string;
  buttonText?: string;
  formFields?: Array<{ name: string; label?: string; rules: Array<any> }>;
  onFinish?: (values: any) => void;
  onCancel?: () => void;
}

const EnterPassword: React.FC<EnterPasswordProps> = ({
  formFields,
  onFinish,
  title,
  buttonText,
}) => {
  const [form] = Form.useForm();

  return (
    <div className="authSec signUp">
      <CustomColumn className="authCol">
        <div className="authScreen">
          <div className="head">
            <h2>{title}</h2>
          </div>

          <CustomForm
            form={form}
            onFinish={onFinish}
            initialValues={{ remember: true }}
            name="enterPasswordForm"
            className="gx-signin-form gx-form-row0"
          >
            {formFields &&
              formFields.map((field) => (
                <CustomFormItem
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  rules={field.rules}
                  validateTrigger="onBlur"
                  className="with-label"
                >
                  <Input placeholder="Enter Your Password" />
                </CustomFormItem>
              ))}
            <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24}>
              <CustomFormItem className="text-center mt-4">
                <CustomButton
                  type="primary"
                  htmlType="submit"
                  className="gx-mb-0 btn"
                  //   loading={}
                >
                  {buttonText ? buttonText : "Submit"}
                </CustomButton>
              </CustomFormItem>
            </CustomColumn>
          </CustomForm>
        </div>
      </CustomColumn>
    </div>
  );
};

export default EnterPassword;
