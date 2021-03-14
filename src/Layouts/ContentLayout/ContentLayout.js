import React, { useEffect, useState } from 'react';
import { Layout} from "antd";
import { ContentCard } from '../../components/ContentCard/ContentCard';
import { ContentData } from '../../Mock/MockData';

import './style.scss';
import {GetSateByKey} from "../../helpers/functions";

const { Content } = Layout;

export const ContentLayout = () => {

    const [content, setContent] = useState([])

    useEffect(()=>{
        setContent(GetSateByKey('initialSate'))
    }, [])

    return (
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background content" style={{ padding: 24, textAlign: 'center' }}>
                {!content.length ? (
                    <div>No Content</div>
                ) : (
                        content.map(({description, title, img}) => <ContentCard description={description} img={img} title={title}/>)
                )}
            </div>
        </Content>
    )
}