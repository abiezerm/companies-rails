import { Layout, Drawer } from "antd";
import * as React from "react";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    MenuOutlined,
} from "@ant-design/icons";
import { useWindowsLayout } from "../hooks/useWindowLayout";
import SidebarContent from "../app/core/sidebar/SidebarContent";

const { Header, Content, Sider } = Layout;

const AppLayout = ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(false);
    const [navCollapsed, setNavCollapsed] = React.useState(false);
    const [width, _] = useWindowsLayout();

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const toggleDrawer = () => {
        setNavCollapsed(!navCollapsed);
    };

    return (
        <Layout className="site-layout">
            <Sider
                className={`${width < 992 && "sidebar-collapsed"}`}
                trigger={null}
                collapsible
                style={{ minHeight: "100vh" }}
                collapsed={collapsed}
            >
                {width < 992 ? (
                    <Drawer
                        className=""
                        placement="left"
                        closable={false}
                        onClick={toggleDrawer}
                        visible={navCollapsed}
                        bodyStyle={{
                            backgroundColor: "#001628",
                        }}
                    >
                        <SidebarContent collapsed={collapsed} />
                    </Drawer>
                ) : (
                    <SidebarContent collapsed={collapsed} />
                )}
            </Sider>
            <Layout>
                <Header
                    className="site-layout-background"
                    style={styles.header}
                >
                    {width < 992
                        ? React.createElement(MenuOutlined, {
                              onClick: toggleDrawer,
                          })
                        : React.createElement(
                              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                              {
                                  className: "trigger",
                                  onClick: toggle,
                              }
                          )}
                </Header>
                <Content
                    className="site-layout-background"
                    style={styles.content}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

const styles = {
    content: {
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
    },
    header: {
        boxShadow: "0px 0px 1px 0px #000",
    },
};

export default AppLayout;
