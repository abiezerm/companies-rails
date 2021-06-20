import { Divider, Tag } from "antd";
import * as React from "react";
import { useDispatchPromise } from "../../hooks/useDispatchPromise";
import { ActionCompanies } from "../../redux/companies/companiesActions";
import CompaniesScreen from "../../screens/CompaniesScreen";

const CompaniesContainer = ({ match }) => {
    const { request } = useDispatchPromise(ActionCompanies.getAllRequest);

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (t, r) => <span>{t}</span>,
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
            render: (t, r) => <span>{t}</span>,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            align: "center",
            render: (t, d) =>
                t === "ACTIVE" ? (
                    <Tag color="green">Active</Tag>
                ) : (
                    <Tag color="red">Inactive</Tag>
                ),
        },
        {
            title: "Action",
            key: "action",
            render: (t, d) => (
                <span>
                    <a>Show</a>
                    <Divider type="vertical" />
                    <a>Delete</a>
                </span>
            ),
        },
    ];

    return <CompaniesScreen columns={columns} request={request} />;
};

export default CompaniesContainer;
