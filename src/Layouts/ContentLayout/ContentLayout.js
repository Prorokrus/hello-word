import React from 'react';
import { Layout} from "antd";

const { Content } = Layout;

export const ContentLayout = () => {
    return (
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur deleniti doloremque explicabo incidunt magni nihil nostrum officiis quia, quis reprehenderit tempora totam vitae! Ducimus et iusto quibusdam sequi veritatis?
            </div>
        </Content>
    )
}