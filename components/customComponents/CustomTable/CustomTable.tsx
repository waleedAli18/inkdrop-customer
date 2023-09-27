"use client";
import React, { memo, FC } from "react";
import { Table } from "antd";
import "./CustomTable.scss";

interface Pagination {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number, pageSize: number) => void;
}

interface CustomTableProps {
  data?: any[];
  className?: string;
  pagination?: Pagination;
  listingCallback?: (options: Pagination) => void;
}

const CustomTable: FC<CustomTableProps> = ({
  data,
  className = "",
  pagination,
  listingCallback,
  ...restProps
}) => {
  const handleChange = (page: number, pageSize: number) => {
    if (listingCallback) {
      listingCallback({
        current: page,
        pageSize,
        total: pagination?.total || 0,
        onChange: function (page: number, pageSize: number): void {
          throw new Error("Function not implemented.");
        },
      });
    }
  };

  return (
    <div className="customTableWrapper">
      <Table
        {...restProps}
        className={`${className} customTableContainer`}
        dataSource={data}
        pagination={{
          showSizeChanger: false,
          current: pagination?.current,
          pageSize: pagination?.pageSize,
          total: pagination?.total,
          onChange: handleChange,
        }}
      />
    </div>
  );
};

export default memo(CustomTable);
