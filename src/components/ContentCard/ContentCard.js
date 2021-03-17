import React, {useEffect, useState} from 'react';
import {Card, message} from 'antd';
import {createCard, deleteCard} from "../../helpers/functions";

const { Meta } = Card;

export const ContentCard = ({ img, title, description, index, initialState, setInitialState }) => {

    const [ removeElement, setRemoveElement ] = useState([])

    useEffect(()=>{
        if (!!removeElement.length) {
            message.success(removeElement.title);
        }
    })

    return (
        <Card
            hoverable
            style={{ width: 240, margin: 10 }}
            cover={<img alt="example" src={img} />}
            onClick={() => {
                const [ removed, state ] = deleteCard(initialState, index)
                setRemoveElement(removed)
                setInitialState([ ...state ])
            } }
        >
            <Meta title={title} description={description} />
        </Card>
    )
}