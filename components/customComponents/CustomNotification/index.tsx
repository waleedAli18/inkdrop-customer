"use client";

import React, { FC, memo, useRef, useState, useEffect } from "react";
import { Skeleton, Switch } from "antd";
import moment from "moment";
import CustomHeading from "../../uiComponents/CustomHeading/CustomHeading";

interface Notification {
  id: number;
  readStatus: string;
  notificationType: string;
  entityId: number;
  title: string;
  body: string;
  updatedAt: string;
}

interface CustomNotificationProps {
  notificationList: Notification[];
  count: number;
  page: number;
  setPage: (page: number) => void;
  pagination: {
    totalCount: number;
    take: number;
  };
  loading: boolean;
  setLoading: (loading: boolean) => void;
  onClickReadStatus: (id: number, index: number) => void;
  onChangeNotificationEnable: (options: {
    notificationEnabled: boolean;
  }) => void;
  notifications: any; // Define the type for notifications
  notificationEnabled: boolean;
}

const CustomNotification: FC<CustomNotificationProps> = ({
  notificationList,
  count,
  page,
  setPage,
  pagination,
  loading,
  setLoading,
  onClickReadStatus,
  onChangeNotificationEnable,
  notifications,
  notificationEnabled,
}) => {
  const [openNotification, setOpenNotification] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenNotification(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const items = (
    <div className="user-profile notification-drop-down" ref={dropdownRef}>
      <div className="head">
        <CustomHeading className="sec-title">Notifications</CustomHeading>
        <div className="switch-toggle">
          <Switch
            checked={notificationEnabled}
            onChange={(notificationEnabled) => {
              onChangeNotificationEnable({
                notificationEnabled,
              });
            }}
          />
        </div>
      </div>
      <ul className="notification-list">
        <Skeleton loading={false}>
          {notificationList?.map((notification, index) => (
            <li
              key={index}
              className={notification?.readStatus?.toLowerCase()}
              onClick={() => {
                onClickReadStatus(notification?.id, index);
              }}
            >
              <h5>{notification?.title}</h5>
              <p>{notification?.body}</p>
              <span>
                {moment
                  .utc(notification?.updatedAt)
                  .local()
                  .startOf("seconds")
                  .fromNow()}
              </span>
            </li>
          ))}
        </Skeleton>
        <Skeleton
          active
          loading={loading}
          paragraph={{
            rows: 1,
          }}
        />
      </ul>
    </div>
  );

  return (
    <>
      <div className="notification-sec"></div>
    </>
  );
};

export default memo(CustomNotification);
