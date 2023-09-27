"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BiUser } from "react-icons/bi";
import { Layout, Badge, Menu, Dropdown, Avatar } from "antd";
import {
  DropdownMenu,
  HomeMenuItems,
  UNAUTHENTICATED_ROUTES,
} from "../../../utils/constants/routes.constant";
import CustomRow from "../../uiComponents/CustomRow/CustomRow";
import CustomColumn from "../../uiComponents/CustomColumn/CustomColumn";
import CustomModal from "../../uiComponents/CustomModal/CustomModal";
import Login from "../../layouts/auth/login";
import SignUp from "../../layouts/auth/signup";
import ForgotPassword from "../../layouts/auth/forgot-password";
import OtpVerification from "../../layouts/auth/otp-verification";
import ResetPassword from "../../layouts/auth/reset-password";
import CustomSearch from "../../uiComponents/CustomSearch/CustomSearch";
import CartIcon from "../../../assets/images/svg/cart";
import NotificationIcon from "../../../assets/images/svg/notification";
import SearchIcon from "../../../assets/images/svg/search";
import logo from "../../../assets/images/logo.png";
import LoginIcon from "../../../assets/images/svg/login";
import { AppContext } from "../../../context/Context";
import ScrollProgressBar from "../ScrollProgress";
import { notificationsList } from "../../../utils/data/home.data";
import "./CustomHomeNavbar.scss";

const { Header } = Layout;

enum AuthMode {
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
  FORGOT_PASSWORD = "FORGOT_PASSWORD",
  OTP = "OTP",
  RESET_PASSWORD = "RESET_PASSWORD",
}

interface CustomHomeNavbarProps {
  dashboardMenu?: boolean;
}

const CustomHomeNavbar: React.FC<CustomHomeNavbarProps> = ({
  dashboardMenu,
}) => {
  const { appContext } = React.useContext(AppContext);
  const [authMode, setAuthMode] = useState(AuthMode.SIGN_IN);
  const [userEmail, setUserEmail] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Retrieve data from localStorage
      const storedValue = localStorage.getItem("authUser");
      const authUser = storedValue ? JSON.parse(storedValue) : null;
      setAuthData(authUser);
    }
  }, []);

  const renderContent = () => {
    switch (authMode) {
      case AuthMode.SIGN_IN:
        return (
          <Login
            onSignUpClick={() => setAuthMode(AuthMode.SIGN_UP)}
            onForgotPasswordClick={() => setAuthMode(AuthMode.FORGOT_PASSWORD)}
            onSetModal={() => setIsModalVisible(false)}
          />
        );
      case AuthMode.SIGN_UP:
        return <SignUp onSignInClick={() => setAuthMode(AuthMode.SIGN_IN)} />;
      case AuthMode.FORGOT_PASSWORD:
        return (
          <ForgotPassword
            onOtpClick={() => setAuthMode(AuthMode.OTP)}
            onSignInClick={() => setAuthMode(AuthMode.SIGN_IN)}
            setUserEmail={setUserEmail}
          />
        );
      case AuthMode.OTP:
        return (
          <OtpVerification
            userEmail={userEmail}
            onResetClick={() => setAuthMode(AuthMode.RESET_PASSWORD)}
          />
        );

      case AuthMode.RESET_PASSWORD:
        return (
          <ResetPassword
            onSignInClick={() => setAuthMode(AuthMode.SIGN_IN)}
            userEmail={userEmail}
          />
        );
      default:
        return null;
    }
  };

  const MENU = (
    <Menu className="headerDropdownMenu">
      {DropdownMenu.map((menu) => (
        <Menu.Item key={menu.selectedOptionKey} icon={menu.icon}>
          <Link href={menu.linkTo}>{menu.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  const NOTIFICATIONS_DROPDOWN = (
    <div className="notificationList">
      <ul>
        {notificationsList.map((list) => (
          <Link href="#" key={list.id}>
            <li>
              <div className="img">
                <Image
                  src={list.imageSrc}
                  height={35}
                  width={35}
                  alt="Profile"
                />
              </div>
              <p>{list.text}</p>
              <div className="dayTime">
                {list.day && <span>{list.day}</span>}
                {list.time && <span>{list.time}</span>}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );

  const handleLogIn = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const path = usePathname();

  return (
    <>
      <Header className="homeHeader">
        <CustomRow>
          <CustomColumn
            xl={dashboardMenu ? 12 : 4}
            lg={dashboardMenu ? 12 : 4}
            md={24}
            sm={24}
            xs={24}
            align="left"
          >
            <div className="left">
              <div className="logo">
                <Link href={UNAUTHENTICATED_ROUTES.HOME}>
                  <Image src={logo.src} alt="Logo" height={50} width={65} />
                </Link>
              </div>
            </div>
          </CustomColumn>
          {!dashboardMenu && (
            <CustomColumn
              xl={16}
              lg={14}
              md={24}
              sm={24}
              xs={24}
              align="center"
            >
              <div className="mid">
                <Menu mode="horizontal">
                  {HomeMenuItems.map((menu) => (
                    <Menu.Item
                      key={menu.selectedOptionKey}
                      className={
                        menu.linkTo === path ? "activeMenu" : "inactiveMenu"
                      }
                    >
                      <Link href={menu.linkTo}>{menu.label}</Link>
                    </Menu.Item>
                  ))}
                </Menu>
              </div>
            </CustomColumn>
          )}
          <CustomColumn
            xl={dashboardMenu ? 12 : 4}
            lg={dashboardMenu ? 12 : 4}
            md={24}
            sm={24}
            xs={24}
            align="right"
          >
            <div className="right">
              {dashboardMenu ? (
                <CustomSearch placeholder="Search for products or designs" />
              ) : (
                <Badge className="badgeWrapper">
                  <SearchIcon
                    className="headIcon"
                    // onClick={() => setConfirmationModal(true)}
                  />
                </Badge>
              )}

              <Badge
                className="badgeWrapper"
                count={notificationsList.length}
                color="#892fc0"
              >
                <Dropdown
                  className="badgeWrapper"
                  overlay={NOTIFICATIONS_DROPDOWN}
                  trigger={["click"]}
                >
                  <NotificationIcon className="user-avatar headIcon" />
                </Dropdown>
              </Badge>
              <Badge className="badgeWrapper" count={3} color="#892fc0">
                <Link href={UNAUTHENTICATED_ROUTES.CART}>
                  <CartIcon className="headIcon" />
                </Link>
              </Badge>

              {authData !== null ? (
                <Dropdown
                  className="badgeWrapper"
                  overlay={MENU}
                  trigger={["click"]}
                >
                  <Avatar icon={<BiUser />} className="user-avatar headIcon" />
                </Dropdown>
              ) : (
                <Badge className="badgeWrapper">
                  <LoginIcon
                    onClick={() => handleLogIn()}
                    className="headIcon"
                  />
                </Badge>
              )}
            </div>
          </CustomColumn>
        </CustomRow>

        {/* Modal */}
        <CustomModal
          open={isModalVisible}
          centered
          closable={false}
          onCancel={handleModalClose}
          width="550px"
          style={{ borderRadius: 40, overflow: "hidden" }}
          // className={styles.orderModal}
          footer={null}
        >
          <>
            <div className="authModalWrapper">
              <div className="logo">
                <Image src={logo.src} alt="Logo" height={140} width={170} />
              </div>
              {renderContent()}
            </div>
          </>
        </CustomModal>
      </Header>
      <ScrollProgressBar />
    </>
  );
};

export default CustomHomeNavbar;
