import * as React from "react";
import { Divider, Popconfirm, message } from "antd";
import ClientsScreen from "../../../screens/ClientsScreen";
import { useDispatchPromise } from "../../../hooks/useDispatchPromise";
import { ClientsActions } from "../../../redux/clients/clientsActions";
import { Link } from "react-router-dom";
import { deleteClientById } from "../../../redux/clients/clientsServices";

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
                    <Link to={`/clients/${d.id}`}>Show</Link>
                    <Divider type="vertical" />
                    <Popconfirm
                        title="Are you sure to delete this client?"
                        onConfirm={() => {
                            deleteClientById(d.id);
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

    return <ClientsScreen columns={columns} request={request} />;
};

export default ClientsContainer;
