"use client";

import React, { memo, ReactNode } from "react";
import { Modal, ModalProps } from "antd";
import styles from "./CustomModal.module.css";

interface CustomModalProps extends ModalProps {
  children?: ReactNode;
  // Any additional props we might need
}

const CustomModal: React.FC<CustomModalProps> = (props) => {
  return (
    <div className={`kl-custom-modal-wrapper ${styles.customModalWrapper}`}>
      <Modal zIndex={9999999999999} {...props}>
        {props.children}
      </Modal>
    </div>
  );
};

export default memo(CustomModal);
