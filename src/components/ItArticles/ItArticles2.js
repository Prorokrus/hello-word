import React from 'react';
import { Layout} from "antd";
import { ContentCard } from '../ContentCard/ContentCard';

//import './style.scss';

const { Content } = Layout;

export const ItArticles2 = ({ initialState, content$ }) => {

    return ( <div></div>
       /* <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background content" style={{ padding: 24, textAlign: 'center' }}>
                {!initialState.length ? (
                    <div>No Content</div>
                ) : (
                    content$.map(({description, img, title, removeCard, id, theme}) => {
                        return (
                            <ContentCard key={ id } description={ description }
                                         title={ title } img={ img }
                                         id={ id } removeCard={ removeCard }
                                         theme={theme}/>
                        )
                    })
                                                                                        )
                )}
            </div>
        </Content>*/
    )
}