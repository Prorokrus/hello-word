import React, { useEffect } from "react";
import { Layout } from 'antd';
import { observer } from 'mobx-react-lite';
import { ContentCard} from "../../components/ContentCard/ContentCard";

import { useRootStore } from "../../mobx/ProviderRootStore";

const  { Content } = Layout

export const ItArticle = observer(() => {
    const { setInitialState, content$ } = useRootStore()
      const it = content$.filter(n=>n.theme === "it");
    return (
        <Content>
            <div className="content" style={ { padding: 25, textAlign: 'center' } }>
                { !content$.length ? (
                    <div>No content</div>
                ) : (
                    it.map(({description, img, title, removeCard, id, theme}) => {
                        return (
                            <ContentCard key={ id } description={ description }
                                         title={ title } img={ img }
                                         id={ id } removeCard={ removeCard }
                                         theme={theme}/>
                        )
                    })
                )
                }
                {console.log("dadad3r3")}
            </div>
        </Content>
    )
})