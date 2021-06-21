import { Button, Col, Form, Input, Row, Select } from "antd";
import * as React from "react";
import Card from "../app/core/card";
import { AddAddressModalScreen } from "./AddAddressModalScreen";

const { Option } = Select;

const ClientsFormScreen = ({
    onSubmit,
    form,
    isEdit,
    onSubmitAddresses,
    history,
    data = undefined,
    companies = [],
}) => {
    const [isVisible, setVisible] = React.useState(false);

    const handleOk = () => {
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const addMoreButton = () => {
        const extra = [
            <Button
                style={{ marginRight: "10px" }}
                type="danger"
                onClick={() => history.push("/clients")}
            >
                Go back
            </Button>,
        ];

        if (isEdit)
            extra.push(
                <Button type="primary" onClick={() => setVisible(true)}>
                    Add a address
                </Button>
            );

        return extra;
    };

    return (
        <>
            <AddAddressModalScreen
                handleOk={handleOk}
                handleCancel={handleCancel}
                isVisible={isVisible}
                onSubmitAddresses={onSubmitAddresses}
            />
            <Card title="Client" extra={addMoreButton()}>
                <Form form={form} onFinish={onSubmit}>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item name="company" noStyle>
                                <Form.Item
                                    label="Company"
                                    name={["company", "id"]}
                                    required={[{ required: true }]}
                                >
                                    <Select
                                        placeholder="Select a company"
                                        allowClear
                                    >
                                        {companies.map((company, idx) => {
                                            return (
                                                <Option value={company.id}>
                                                    {company.name}
                                                </Option>
                                            );
                                        })}
                                    </Select>
                                </Form.Item>
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} md={12}>
                            <Form.Item
                                label="First name"
                                name="firstName"
                                required={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} md={12}>
                            <Form.Item
                                label="Last name"
                                name="lastName"
                                required={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} md={12}>
                            <Form.Item
                                label="E-mail"
                                name="email"
                                required={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} lg={12} md={12}>
                            <Form.Item
                                label="Phone"
                                name="phone"
                                required={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                label="Title"
                                name="title"
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
            </Card>
            {isEdit && (
                <Card style={{ marginTop: "10px" }} title="Addresses">
                    <Row gutter={16}>
                        {data &&
                            data.addresses.map((address) => {
                                return (
                                    <Col xs={24} lg={6} md={6}>
                                        <Card style={{ marginTop: "10px" }}>
                                            <span>
                                                <b>Address 1</b> :{" "}
                                                {address.address1}
                                            </span>
                                            <br />
                                            <span>
                                                <b>Address 2</b> :{" "}
                                                {address.address2}
                                            </span>
                                            <br />
                                            <span>
                                                <b>Zip Code:</b>{" "}
                                                {address.zip_code}
                                            </span>
                                            <br />
                                            <span>
                                                <b>City:</b> {address.city}
                                            </span>
                                            <br />
                                            <span>
                                                <b>Country:</b>{" "}
                                                {address.country}
                                            </span>
                                        </Card>
                                    </Col>
                                );
                            })}
                    </Row>
                </Card>
            )}
        </>
    );
};

export default ClientsFormScreen;
