import React, { useEffect, useState } from 'react';
import { Layout} from "antd";
import { ContentCard } from '../../components/ContentCard/ContentCard';
import { ContentData } from '../../Mock/MockData';

import './style.scss';
import {GetLocal, GetSateByKey} from "../../helpers/functions";

const { Content } = Layout;

export const ContentLayout = ({ initialState, setInitialState }) => {

    /*const [content, setContent] = useState(GetLocal())

    useEffect(()=>{
        setContent(GetSateByKey('initialSate'))
    }, [])*/

    return (
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background content" style={{ padding: 24, textAlign: 'center' }}>
                {!initialState.length ? (
                    <div>No Content</div>
                ) : (
                    initialState.map(({description, title, img}, index) => <ContentCard key={index}
                                                                                        initialState={initialState}
                                                                                        setInitialState={setInitialState}
                                                                                       index={index}
                                                                                       description={description}
                                                                                       img={img}
                                                                                       title={title}/>)
                )}
            </div>
        </Content>
    )
}