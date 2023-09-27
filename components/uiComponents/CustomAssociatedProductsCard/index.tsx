"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AssociatedProductsInterface } from "../../../interface/associated.interface";
import deleteIcon from "../../../assets/images/delete-circle.png";
import "./CustomAssociatedProductsCard.scss";

interface CustomAssociatedProductsCardProps {
  data: AssociatedProductsInterface;
  link: string;
  children?: ReactNode;
  deleteButton?: boolean;
  onDeleteClick?: () => void;
  active?: ReactNode;
}

const CustomAssociatedProductsCard: React.FC<
  CustomAssociatedProductsCardProps
> = ({ data, link, children, deleteButton, onDeleteClick, active }) => {
  const { imageSrc } = data;
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
  };
  return (
    <div className="cont">
      {imageSrc && (
        <div className="img">
          <Image
            height={250}
            width={200}
            src={imageSrc}
            alt="Associated Products"
            style={{ objectFit: "contain" }}
          />
          {deleteButton && (
            <button onClick={onDeleteClick} className="deleteIcon">
              <Image src={deleteIcon} alt="Delete"></Image>
            </button>
          )}
        </div>
      )}
      {children}
      {link && (
        <Link href={link}>
          {deleteButton ? "Edit Product" : "Customize Product"}
        </Link>
      )}
      {active}
    </div>
  );
};

export default CustomAssociatedProductsCard;
