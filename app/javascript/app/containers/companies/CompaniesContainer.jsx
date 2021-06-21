import * as React from "react";
import { Divider, Tag, Popconfirm, message } from "antd";
import { useDispatchPromise } from "../../../hooks/useDispatchPromise";
import { ActionCompanies } from "../../../redux/companies/companiesActions";
import CompaniesScreen from "../../../screens/CompaniesScreen";
import { Link } from "react-router-dom";
import { companyDeleteById } from "../../../redux/companies/companiesServices";

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
                    <Link to={`/companies/${d.id}`}>Show</Link>
                    <Divider type="vertical" />
                    <Popconfirm
                        title="Are you sure to delete this company?"
                        onConfirm={() => {
                            companyDeleteById(d.id);
                            message.success("Deleted");
                            window.location.reload();
                        }}
                    >
                        <a>Delete</a>
                    </Popconfirm>
                </span>
            ),
        },
    ];

    return <CompaniesScreen columns={columns} request={request} />;
};

export default CompaniesContainer;
