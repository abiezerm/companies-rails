import * as React from "react";
import { Button, Col, Row } from "antd";
import axios from "axios";
import Card from "../core/card";
import AppLayout from "../../screens/AppLayout";
import { useDispatchPromise } from "../../hooks/useDispatchPromise";
import { ActionCompanies } from "../../redux/companies/companiesActions";
import TableStandard from "../core/table";

const App = ({ match }) => {
    const { request } = useDispatchPromise(ActionCompanies.getAllRequest);
    return (
        <AppLayout>
            <TableStandard
                columns={[
                    {
                        title: "Name",
                        dataIndex: "name",
                    },
                    {
                        title: "Phone",
                        dataIndex: "phone",
                    },
                    {
                        title: "Status",
                        dataIndex: "status",
                    },
                    {
                        title: "Action",
                        render: (t, d) => <a>Delete</a>,
                    },
                ]}
                request={(filters) => request(filters)}
            />
        </AppLayout>
    );
};

export default App;
