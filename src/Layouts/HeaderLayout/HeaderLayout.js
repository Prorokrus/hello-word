import React from 'react';
import { Layout } from "antd";

const { Header } = Layout;

export const HeaderLayout = () => {
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <h1 style={{color: "#fff", paddingLeft: 20 }}>IT News</h1>
        </Header>
    )
}