import * as React from "react";
import { Menu } from "antd";
import { LibraryIcon, UsersIcon } from "@heroicons/react/solid";
import { useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

const SidebarContent = ({ collapsed }) => {
    const path = window.location.pathname;
    const history = useHistory();
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
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[window.location.pathname]}
            >
                <Menu.Item
                    key="/companies"
                    icon={<LibraryIcon style={{ height: "15px" }} />}
                    // onClick={() => history.push("/companies")}
                >
                    <Link to="/companies">Companies</Link>
                </Menu.Item>
                <Menu.Item
                    key="/clients"
                    icon={<UsersIcon style={{ height: "15px" }} />}
                    onClick={() => history.push("/clients")}
                >
                    <Link to="/clients">Clients</Link>
                </Menu.Item>
            </Menu>
        </>
    );
};

export default SidebarContent;
