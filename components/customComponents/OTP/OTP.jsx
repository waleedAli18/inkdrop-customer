"use client";

import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import CustomForm from "components/uiComponents/CustomForm/CustomForm";
import CustomButton from "components/uiComponents/CustomButton/CustomButton";

const FormItem = Form.Item;

function OTP(props) {
  const [otp, setOtp] = useState(null);

  const [counter, setCounter] = React.useState(30);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className="gx-app-login-main-content">
      <div className="gx-app-login-content">
        <CustomForm
          initialValues={{ remember: true }}
          name="basic"
          //   onFinish={formik.handleSubmit}
          className="gx-signin-form gx-form-row0"
        >
          <div className="resend-wrapper">
            <OtpInput
              value={otp}
              // isInputNum={true}
              inputType="number"
              onChange={setOtp}
              numInputs={4}
              shouldAutoFocus={true}
              renderInput={(props) => <Input {...props} />}
            />
          </div>

          <FormItem>
            <CustomButton
              type="primary"
              className="gx-mb-0 btn"
              htmlType="submit"
              onClick={() => props.onSubmit(otp)}
              loading={props.loading}
            >
              Submit
            </CustomButton>

            <div className="text-center">
              <Button
                type="primary"
                disabled={counter >= 1 ? true : false}
                htmlType="submit"
                loading={props.otpLoading}
                onClick={() => {
                  if (counter >= 1) {
                    // Empty function
                  } else {
                    props.resendOTP();
                    setCounter(30);
                  }
                }}
                className="resendCounter"
              >
                {" "}
                {counter >= 1 ? `Resend in ${counter} seconds` : "Resend OTP"}
              </Button>
            </div>

            <p className="already-have-account">
              Go Back to <Link to="/">Login</Link>
            </p>
          </FormItem>
        </CustomForm>
      </div>
    </div>
  );
}

export default OTP;
