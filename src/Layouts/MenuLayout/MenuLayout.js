import React from 'react';
import { Layout, Menu } from 'antd';
import { NavRoutes } from '../../helpers/MenuRoutes';

import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined, ShopOutlined, TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";

const { Sider } = Layout;

export const MenuLayout = () => {
    return (
        <div>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>

                    {
                        NavRoutes.map((menu) => {
                            return (
                                <Menu.Item key={menu.id} icon={menu.icon} >
                                    {menu.name}
                                </Menu.Item>
                            )
                        })
                    }

                </Menu>
            </Sider>
        </div>
    )
}