"use client";

import React, { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layout, Menu, Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import CustomHomeNavbarMessage from "../components/customComponents/CustomHomeNavbarMessage";
import { DASHBOARD_MENU } from "../utils/constants/routes.constant";
import { AppProvider } from "../context/AppContext";
import CustomHomeNavbar from "../components/customComponents/CustomHomeNavbar";
import "./layout.scss";
import "./dashboard.scss";

const { Sider, Content } = Layout;

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const path = usePathname();

  const toggleSider = () => {
    setCollapsed(!collapsed);
  };

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
    const sideBar = document.querySelector(".ant-layout-sider-children");
    const scrollTop = window.scrollY;
    scrollTop >= 120
      ? header?.classList.add("isSticky")
      : header?.classList.remove("isSticky");

    scrollTop >= 120
      ? sideBar?.classList.add("isSticky")
      : sideBar?.classList.remove("isSticky");
  };

  return (
    <AppProvider>
      <CustomHomeNavbarMessage message="Attention all shoppers: All orders above $20.00 will be delivered with the delivery fee waived off!" />
      <Layout style={{ minHeight: "95vh" }} className="dashboardLayout">
        <Sider
          collapsed={collapsed}
          className={`dashboardSidebar ${collapsed ? "collapsed" : "expanded"}`}
        >
          <Button
            icon={collapsed ? <MenuOutlined /> : <CloseOutlined />}
            onClick={toggleSider}
            className="toggleButton"
          />

          <Menu
            mode="vertical"
            defaultSelectedKeys={["dashboard"]}
            className="dashboardMenu"
            inlineCollapsed={true}
          >
            {DASHBOARD_MENU.map((menu) => (
              <Menu.Item
                key={menu.selectedOptionKey}
                icon={menu.icon}
                className={menu.linkTo === path ? "activeMenu" : "inactiveMenu"}
              >
                <Link href={menu.linkTo}>{menu.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <CustomHomeNavbar dashboardMenu={true} />

          <Content style={{ padding: "15px 50px 15px 30px" }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </AppProvider>
  );
};

export default DashboardLayout;
