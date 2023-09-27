"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout, Menu } from "antd";
import CustomRow from "../../uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../uiComponents/CustomColumn/CustomColumn";
import { FooterMenu } from "../../../utils/constants/routes.constant";
import logo from "../../../assets/images/logo.png";
import "./CustomHomeFooter.scss";

const { Footer: AntFooter } = Layout;

const CustomHomeFooter: React.FC = () => {
  return (
    <AntFooter className="homeFooter">
      <CustomRow justify="center">
        <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24}>
          <div className="logo">
            <Image src={logo.src} alt="Logo" height={75} width={90} />
          </div>
        </CustomColumn>
      </CustomRow>
      <CustomRow justify="center">
        <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24}>
          <Menu mode="horizontal">
            {FooterMenu.map((menu) => (
              <Menu.Item key={menu.selectedOptionKey}>
                <Link href={menu.linkTo}>{menu.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </CustomColumn>
      </CustomRow>
      <CustomRow justify="center">
        <CustomColumn xl={24} lg={24} md={24} sm={24} xs={24}>
          <p className="copyright">
            © {new Date().getFullYear()} Inkdrop. All Rights Reserved.
          </p>
        </CustomColumn>
      </CustomRow>
    </AntFooter>
  );
};

export default CustomHomeFooter;
