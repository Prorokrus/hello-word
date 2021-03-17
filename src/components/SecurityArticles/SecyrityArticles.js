import React from 'react';
import { Layout} from "antd";
import { ContentCard } from '../ContentCard/ContentCard';

//import './style.scss';

const { Content } = Layout;

export const SecurityArticles = ({ initialState, setInitialState }) => {

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