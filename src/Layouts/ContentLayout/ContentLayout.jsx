import React, { useEffect } from "react";
import { Layout } from 'antd';
import { observer } from 'mobx-react-lite';
import { ContentCard} from "../../components/ContentCard/ContentCard";

import './style.scss';
import { useRootStore } from "../../mobx/ProviderRootStore";

const  { Content } = Layout

export const ContentLayout = observer(() => {
    const { setInitialState, content$ } = useRootStore()

    return (
        <Content>
            <div className="content" style={ { padding: 25, textAlign: 'center' } }>
                { !content$.length ? (
                    <div>No content</div>
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
                }
            </div>
        </Content>
    )
})