import { Table } from "antd";
import * as React from "react";
import { useFetchPagination } from "../../../hooks/useFetchPagination";

const TableStandard = ({ columns, request }) => {
    const { isLoading, data, pagination, onChange } =
        useFetchPagination(request);

    const handleTotal = (total, range) =>
        `${range[0]}-${range[1]} of ${total} items`;

    const handleTableChange = (pagination) => {
        onChange(pagination.current, pagination.pageSize);
    };
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={{ ...pagination, showTotal: handleTotal }}
            onChange={handleTableChange}
            loading={{
                spinning: isLoading,
                size: "large",
                tip: "Loading...",
            }}
        />
    );
};

export default TableStandard;
