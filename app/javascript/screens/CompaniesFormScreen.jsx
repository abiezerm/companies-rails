import { Button, Col, Form, Input, Row, Switch } from "antd";
import * as React from "react";
import Card from "../app/core/card";
import CardBox from "../app/core/card/cardbox";
import TableStandard from "../app/core/table";
import { useWindowsLayout } from "../hooks/useWindowLayout";

const CompaniesFormScreen = ({
    form,
    onSubmit,
    isEdit,
    request,
    columns,
    id,
}) => {
    const [width, _] = useWindowsLayout();
    return (
        <>
            <Card title="Companies">
                <Form form={form} onFinish={onSubmit}>
                    <Row gutter={16}>
                        <Col xs={24} lg={12} md={12}>
                            <Form.Item
                                label="Name"
                                name="name"
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
                        <Col xs={24} lg={12} md={12}>
                            <Form.Item noStyle shouldUpdate>
                                {({ getFieldValue }) => {
                                    return (
                                        <Form.Item label="Status" name="status">
                                            <Switch
                                                checked={
                                                    getFieldValue("status") ===
                                                    "ACTIVE"
                                                }
                                                onChange={(e) => {
                                                    form &&
                                                        form.setFieldsValue({
                                                            status: e
                                                                ? "ACTIVE"
                                                                : "INACTIVE",
                                                        });
                                                }}
                                            />
                                        </Form.Item>
                                    );
                                }}
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
                <Card title="Clients" style={{ marginTop: "10px" }}>
                    {width < 600 ? (
                        <CardBox
                            columns={columns}
                            request={(filters) => request(id, filters)}
                        />
                    ) : (
                        <TableStandard
                            columns={columns}
                            request={(filters) => request(id, filters)}
                        />
                    )}
                </Card>
            )}
        </>
    );
};

export default CompaniesFormScreen;
