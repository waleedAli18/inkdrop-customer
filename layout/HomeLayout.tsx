"use client";
import React, { ReactNode, useEffect } from "react";
import { Layout } from "antd";
import CustomHomeNavbar from "../components/customComponents/CustomHomeNavbar";
import CustomHomeNavbarMessage from "../components/customComponents/CustomHomeNavbarMessage";
import CustomHomeFooter from "../components/customComponents/CustomHomeFooter";
import { AppProvider } from "../context/AppContext";
import "./layout.scss";

const { Content } = Layout;

interface HomeLayouts {
  children?: ReactNode;
  className?: string;
}

const HomeLayout: React.FC<HomeLayouts> = ({ children, className }) => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* This will fix header after a specific scroll height */
  const isSticky = () => {
    const header = document.querySelector(".homeHeader");
    const scrollTop = window.scrollY;
    scrollTop >= 120
      ? header?.classList.add("isSticky")
      : header?.classList.remove("isSticky");
  };

  return (
    <AppProvider>
      <Layout style={{ minHeight: "100vh" }} className={className}>
        <Content>
          <CustomHomeNavbarMessage message="Attention all shoppers: All orders above $20.00 will be delivered with the delivery fee waived off!" />
          <CustomHomeNavbar />
          {children}
          <CustomHomeFooter />
        </Content>
      </Layout>
    </AppProvider>
  );
};

export default HomeLayout;
