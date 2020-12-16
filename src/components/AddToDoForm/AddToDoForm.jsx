import React from 'react';

import {Form, Row, Col, Button, Input} from 'antd';

const AddToDoForm = ({onFormSubmit}) => {

    const [form] = Form.useForm();

    const onFinish = () =>{
        onFormSubmit({
            name: form.getFieldValue('name')
        });

        form.resetFields();
        console.log("Test")
    }

    return(
        <Form
            form = {form}
            onFinish = {onFinish}
            layout = "horizontal"
        >
            <Row gutter = {20}>
                <Col xs={24}>
                    <Form.Item name={"name"}>
                        <Input placeholder = "we need tode done?"/>
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Button type="primary" htmlType = "submit" block>
                        Add Todo
                    </Button>
                </Col>
            </Row>
        </Form>

    );
}

export default AddToDoForm;