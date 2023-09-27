"use client";

import React, { useState } from "react";
import { Form } from "antd";
import Image from "next/image";
import Link from "next/link";
import DashboardLayout from "../../../layout/DashboardLayout";
import CustomHomeHeadingButton from "../../../components/uiComponents/CustomHomeHeadingButton";
import CustomHeading from "../../../components/uiComponents/CustomHeading/CustomHeading";
import { AUTHENTICATED_ROUTES } from "../../../utils/constants/routes.constant";
import CustomForm from "../../../components/uiComponents/CustomForm/CustomForm";
import CustomFormItem from "../../../components/uiComponents/CustomFormItem/CustomFormItem";
import ImageUploader from "../../../components/customComponents/ImageUploader";
import CustomRow from "../../../components/uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../../components/uiComponents/CustomColumn/CustomColumn";
import CustomInput from "../../../components/uiComponents/CustomInput/CustomInput";
import CustomTextarea from "../../../components/uiComponents/CustomTextarea/CustomTextarea";
import CustomTagInput from "../../../components/uiComponents/CustomTag/CustomTag";
import "./addArtwork.scss";

const AddArtwork: React.FC = () => {
  const [form] = Form.useForm();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [enterModal, setEnterModal] = useState(false);

  interface FormData {
    title: string;
    tags: string;
    description: string;
    artPicture: File | null;
  }

  const handleModalClose = () => {
    setEnterModal(false);
  };

  const handleImageChange = (file: File | null) => {
    setSelectedImage(file);
  };

  const onAddNetwork = async (values: FormData) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("tags", values.tags);
    formData.append("description", values.description);
    formData.append("artPicture", values.artPicture as File);

    console.log("Add Artwork", values);
  };

  return (
    <DashboardLayout>
      <CustomHomeHeadingButton
        left={<CustomHeading>Add New Artwork</CustomHeading>}
      />
      <div className="authSec signUp">
        <CustomForm
          initialValues={{ remember: true }}
          name="addArtworkForm"
          form={form}
          onFinish={onAddNetwork}
          className="gx-signin-form gx-form-row0"
        >
          <CustomRow>
            <CustomColumn
              xl={6}
              lg={6}
              md={24}
              sm={24}
              xs={24}
              className="left"
            >
              <CustomFormItem
                name="artPicture"
                colon={false}
                className="artPicture"
              >
                <ImageUploader onChange={handleImageChange} />
                {selectedImage && (
                  <div>
                    <Image
                      width={130}
                      height={130}
                      alt="Art Picture"
                      src={URL.createObjectURL(selectedImage)}
                    />
                  </div>
                )}
              </CustomFormItem>
            </CustomColumn>

            <CustomColumn
              xl={10}
              lg={10}
              md={24}
              sm={24}
              xs={24}
              className="right"
            >
              <CustomFormItem
                name="title"
                label="Title of design"
                colon={false}
                className="with-label"
                validateTrigger="onBlur"
                rules={[
                  {
                    required: true,
                    message: "Title of design is required.",
                  },

                  {
                    max: 100,
                  },
                ]}
              >
                <CustomInput placeholder="Use a catchy title of your design" />
              </CustomFormItem>

              <CustomFormItem
                name="tags"
                label="Tags"
                colon={false}
                className="with-label"
                validateTrigger="onBlur"
                rules={[
                  {
                    required: true,
                    message: "Tags are required",
                  },
                ]}
              >
                <CustomTagInput placeholder="Add 4-5 tags to your design for better search results" />
              </CustomFormItem>

              <CustomFormItem
                name="description"
                label="Description"
                colon={false}
                className="with-label"
                validateTrigger="onBlur"
                rules={[
                  {
                    required: true,
                    message: "Description is required.",
                  },
                ]}
              >
                <CustomTextarea placeholder="A short description about your work for you audience" />
              </CustomFormItem>
              {/* <CustomFormItem className=" mt-4">
                <CustomButton
                  type="primary"
                  htmlType="submit"
                  className="gx-mb-0 btn"
                  //   loading={}
                >
                  Update
                </CustomButton>
              </CustomFormItem> */}
            </CustomColumn>
          </CustomRow>
        </CustomForm>
      </div>

      <CustomHomeHeadingButton
        right={
          <Link
            className="button"
            href={`${AUTHENTICATED_ROUTES.MY_DASHBOARD}${AUTHENTICATED_ROUTES.ASSOCIATED_PRODUCTS}/1`}
          >
            Next
          </Link>
        }
      />
    </DashboardLayout>
  );
};

export default AddArtwork;
