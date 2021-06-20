import { Button, Dropdown, Menu } from "antd";
import * as React from "react";
import Card from "../app/core/card";
import CardBox from "../app/core/card/cardbox";
import TableStandard from "../app/core/table";
import { useWindowsLayout } from "../hooks/useWindowLayout";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const CompaniesScreen = ({ columns, request }) => {
    const [width, _] = useWindowsLayout();

    const menu = (
        <Menu>
            <Menu.Item key={0}>
                <Link to="/companies/create">Create a company</Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Card
                title={`Companies`}
                extra={
                    width < 600 ? (
                        <Dropdown overlay={menu} trigger={["click"]}>
                            <DotsVerticalIcon style={{ height: "15px" }} />
                        </Dropdown>
                    ) : (
                        <Button type="primary">
                            <Link
                                style={{ color: "#fff" }}
                                to="/companies/create"
                            >
                                Create a company
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

export default CompaniesScreen;
