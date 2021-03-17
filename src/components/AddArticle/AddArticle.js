import React, { useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import {createCard} from "../../helpers/functions";
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
   /* types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },*/
};

const AddArticleForm = ({initialState, setInitialState}) => {


    const [title, setTitle] = useState("My Article")
    const [theme, setTheme] = useState("it")
    const [img, setImg] = useState("https://blogs.biomedcentral.com/on-physicalsciences/wp-content/uploads/sites/14/2019/02/data-1-620x342.jpg")
    const [description, setDescription] = useState("")

    const onFinish = (values) => {
        console.log("title>>>", title);
        console.log("theme>>>",theme);
        console.log("img>>", img);
        console.log("desc>>>", description);
        createCard(initialState, setInitialState, title, theme, img, description)
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "60px"
        }}>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['article', 'title']}
                    label="Title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input value={title} onChange={(e)=>setTitle(e.target.value)} />
                </Form.Item>
                <Form.Item
                    name={['article', 'theme']}
                    label="Theme"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input value={theme} onChange={(e)=>setTheme(e.target.value)}/>
                </Form.Item>
                <Form.Item name={['article', 'img']} label="Image url">
                    <Input value={img} onChange={(e)=>setImg(e.target.value)}/>
                </Form.Item>
                <Form.Item name={['article', 'description']} label="Description"
                           rules={[
                               {
                                   required: true,
                               },
                           ]}>
                    <Input.TextArea value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default AddArticleForm