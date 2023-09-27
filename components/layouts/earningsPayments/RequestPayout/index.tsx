import React from "react";
import { Form } from "antd";
import CustomForm from "../../../uiComponents/CustomForm/CustomForm";
import CustomFormItem from "../../../uiComponents/CustomFormItem/CustomFormItem";
import CustomColumn from "../../../uiComponents/CustomColumn/CustomColumn";
import CustomButton from "../../../uiComponents/CustomButton/CustomButton";
import CustomInputNumber from "../../../uiComponents/CustomInputNumber/CustomInputNumber";

interface RequestPayoutProps {
  open?: boolean;
  title?: string;
  buttonText?: string;
  onFinish?: (values: any) => void;
  onCancel?: () => void;
}

const RequestPayout: React.FC<RequestPayoutProps> = ({
  onFinish,
  title,
  buttonText,
}) => {
  const [form] = Form.useForm();

  return (
    <div className="authSec signUp">
      <CustomColumn className="authCol" xl={24} lg={24} md={24} sm={24}>
        <div className="authScreen">
          <div className="head">
            <h2>{title}</h2>
          </div>

          <CustomForm
            form={form}
            onFinish={onFinish}
            initialValues={{ remember: true }}
            name="requestPayoutForm"
            className="gx-signin-form gx-form-row0"
          >
            <CustomFormItem
              name="requestPayout"
              key="requestPayout"
              rules={[
                {
                  required: true,
                  message: "Payout amount is required",
                },

                {
                  max: 100,
                },
              ]}
              // label={}

              validateTrigger="onBlur"
              className="with-label"
            >
              <CustomInputNumber
                defaultValue={0}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{2})+(?!\d))/g, ",")
                }
                parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
                bordered={false}
                min={0}
                stringMode={true}
                step="00.01"
                // onChange={onChange}
              />
            </CustomFormItem>

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

export default RequestPayout;
