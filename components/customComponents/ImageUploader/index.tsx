"use client";

import React, { useState } from "react";
import { Upload, Button } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import "./ImageUploader.scss";

interface ImageUploadProps {
  onChange: (file: File | null) => void;
  placeholderImage?: string;
}

const ImageUploader: React.FC<ImageUploadProps> = ({
  onChange,
  placeholderImage,
}) => {
  const [fileList, setFileList] = useState<any[]>([]);

  const handleChange = (info: any) => {
    if (info.file.status === "done") {
      // File is uploaded successfully
      const file = info.file.originFileObj;
      onChange(file);
    } else if (info.file.status === "removed") {
      // File is removed
      onChange(null);
    }

    setFileList(info.fileList);
  };

  return (
    <Upload
      fileList={fileList}
      onChange={handleChange}
      beforeUpload={() => false}
      listType="picture-circle"
      maxCount={1}
      className="imageUploader"
      showUploadList={{ showRemoveIcon: true, showPreviewIcon: false }}
    >
      {fileList.length < 1 && !placeholderImage && (
        <Button className="cameraIcon" icon={<CameraOutlined />}></Button>
      )}
    </Upload>
  );
};

export default ImageUploader;
