import * as React from "react";
import { Menu } from "antd";
import { LibraryIcon, UsersIcon } from "@heroicons/react/solid";

const SidebarContent = ({ collapsed }) => {
    return (
        <>
            <div className={`${collapsed ? "logo-collapsed" : "logo"}`}>
                <img
                    className={`${
                        !collapsed ? "logo-site" : "logo-site-collapsed"
                    }`}
                    src="https://static.wixstatic.com/media/80c9c9_859bcbe1e66341788b32d35f1432b2f2~mv2.png/v1/fill/w_408,h_96,al_c,q_85,usm_0.66_1.00_0.01/80c9c9_859bcbe1e66341788b32d35f1432b2f2~mv2.webp"
                />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item
                    key="1"
                    icon={<LibraryIcon style={{ height: "15px" }} />}
                >
                    Companies
                </Menu.Item>
                <Menu.Item
                    key="2"
                    icon={<UsersIcon style={{ height: "15px" }} />}
                >
                    Clients
                </Menu.Item>
            </Menu>
        </>
    );
};

export default SidebarContent;
