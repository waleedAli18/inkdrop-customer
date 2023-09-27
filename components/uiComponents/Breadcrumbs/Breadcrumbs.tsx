"use client";

import React, { memo } from "react";
import { useRouter } from "next/router";
import CustomRow from "../CustomRow/CustomRow";
import CustomColumn from "../CustomColumn/CustomColumn";
import CustomHeading from "../CustomHeading/CustomHeading";
import styles from "./Breadcrumbs.module.css";

interface BreadcrumbsProps {
  className?: string;
  Icon?: string;
  Title?: string;
  BackBtn?: boolean;
  AddBtn?: React.ReactNode;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const router = useRouter();

  return (
    <div
      className={`breadcrumb cardWithStyle ${props.className} ${styles.breadCrumbWrapper}`}
    >
      <CustomRow align="middle" justify="center">
        <CustomColumn md={12} sm={24} xs={24} className="title-icon-sec">
          <div className="breadcrumbShape inline-block">
            <i className={props.Icon}></i>
          </div>
          {props?.Title ? (
            <CustomHeading className="breadcrumbHeading inline-block margin-0">
              {props?.BackBtn && (
                <span className="backbtn" onClick={() => router.back()}></span>
              )}
              {props?.Title}
            </CustomHeading>
          ) : null}
        </CustomColumn>
        <CustomColumn md={12} sm={24} xs={24}>
          {props?.AddBtn}
        </CustomColumn>
      </CustomRow>
    </div>
  );
};

export default memo(Breadcrumbs);
