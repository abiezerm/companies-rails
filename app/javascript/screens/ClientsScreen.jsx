import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Button, Dropdown, Menu } from "antd";
import * as React from "react";
import { Link } from "react-router-dom";
import Card from "../app/core/card";
import CardBox from "../app/core/card/cardbox";
import TableStandard from "../app/core/table";
import { useWindowsLayout } from "../hooks/useWindowLayout";

const ClientsScreen = ({ request, columns }) => {
    const [width, _] = useWindowsLayout();

    const menu = (
        <Menu>
            <Menu.Item key={0}>
                <Link to="/clients/create">Create a client</Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Card
                title={`Clients`}
                extra={
                    width < 600 ? (
                        <Dropdown overlay={menu} trigger={["click"]}>
                            <DotsVerticalIcon style={{ height: "15px" }} />
                        </Dropdown>
                    ) : (
                        <Button type="primary">
                            <Link
                                style={{ color: "#fff" }}
                                to="/clients/create"
                            >
                                Create a client
                            </Link>
                        </Button>
                    )
                }
            >
                {width < 600 ? (
                    <CardBox
                        columns={columns}
                        request={(filters) => request(filters)}
                    />
                ) : (
                    <TableStandard
                        columns={columns}
                        request={(filters) => request(filters)}
                    />
                )}
            </Card>
        </>
    );
};

export default ClientsScreen;
