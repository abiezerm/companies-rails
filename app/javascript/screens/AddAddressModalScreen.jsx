import { Col, Input, Modal, Row, Form, Button } from "antd";
import * as React from "react";

const AddAddressModalScreen = ({
    isVisible,
    handleOk,
    handleCancel,
    onSubmitAddresses,
}) => {
    const [form] = Form.useForm();

    React.useEffect(() => {
        form.setFieldsValue({
            address1: "",
            address2: "",
            zipCode: "",
            country: "",
        });
    }, []);

    return (
        <Modal
            width={700}
            title={`Add a address`}
            visible={isVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            closable
            footer={[
                <Button
                    key="back"
                    onClick={() => {
                        handleCancel();
                    }}
                >
                    Cancel
                </Button>,
            ]}
        >
            <Form
                form={form}
                onFinish={(values) => {
                    onSubmitAddresses(values);
                    handleOk();
                }}
            >
                <Row gutter={16}>
                    <Col xs={24} lg={12} md={12}>
                        <Form.Item
                            label="Address 1"
                            name="address1"
                            required={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12} md={12}>
                        <Form.Item
                            label="Address 2"
                            name="address2"
                            required={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12} md={12}>
                        <Form.Item
                            label="Zip Code"
                            name="zipCode"
                            required={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12} md={12}>
                        <Form.Item
                            label="City"
                            name="city"
                            required={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12} md={12}>
                        <Form.Item
                            label="Country"
                            name="country"
                            required={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item>
                            <Button block type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

export { AddAddressModalScreen };
