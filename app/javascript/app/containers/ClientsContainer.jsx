import { Divider } from "antd";
import * as React from "react";
import { useDispatchPromise } from "../../hooks/useDispatchPromise";
import { ClientsActions } from "../../redux/clients/clientsActions";
import ClientsScreen from "../../screens/ClientsScreen";

const ClientsContainer = ({}) => {
    const { request } = useDispatchPromise(ClientsActions.getAll);

    const columns = [
        {
            title: "First name",
            dataIndex: "firstName",
            key: "firstName",
            render: (t, r) => <span>{t}</span>,
        },
        {
            title: "Last name",
            dataIndex: "lastName",
            key: "lastName",
            render: (t, r) => <span>{t}</span>,
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "email",
            render: (t, r) => <span>{t}</span>,
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            render: (t, r) => <span>{t}</span>,
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

    return <ClientsScreen columns={columns} request={request} />;
};

export default ClientsContainer;
