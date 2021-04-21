import React, {useEffect, useState} from 'react';
import {Card, message} from 'antd';
import {createCard, deleteCard} from "../../helpers/functions";

const { Meta } = Card;

export const ContentCard = ({ img, title, description, removeCard, id }) => {

    /*const [ removeElement, setRemoveElement ] = useState([])

    useEffect(()=>{
        if (!!removeElement.length) {
            message.success(removeElement.title);
        }
    })*/

    return (
        <Card
            hoverable
            style={{ width: 240, margin: 10 }}
            cover={<img alt="example" src={img} />}
            onClick={() => {
                removeCard(id)
            } }
        >
            <Meta title={title} description={description} />
        </Card>
    )
}