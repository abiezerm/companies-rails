import { Card, Divider, Pagination, Row, Spin } from "antd";
import * as React from "react";
import { useFetchPagination } from "../../../hooks/useFetchPagination";

const CardBox = ({ columns, request }) => {
    const [parseDataSource, setParseDataSource] = React.useState([]);
    const { isLoading, data, pagination, onChange } =
        useFetchPagination(request);

    React.useEffect(() => {
        setParseDataSource(getDataSourceForCard());
    }, [data]);

    const getDataSourceForCard = () => {
        let result = [];
        data.forEach((data, index) => {
            result[index] = [];
            columns.forEach((column) => {
                result[index].push({
                    id: data.id,
                    key: column.dataIndex,
                    key: column.key,
                    value: data[column.dataIndex],
                    title: column.title,
                    render: column.render,
                    originalRecord: data,
                });
            });
        });

        return result;
    };

    const getCards = (data = []) => {
        return data.map((items, index) => {
            return (
                <Card style={{ marginBottom: "10px" }} key={index}>
                    {items.map((item, i) => {
                        if (item.key === "action") {
                            return (
                                <div key={i}>
                                    <Divider />
                                    {item.render(
                                        item.value,
                                        item.originalRecord,
                                        index
                                    )}
                                </div>
                            );
                        } else {
                            return (
                                <p key={i}>
                                    <b>{item.title}:</b>{" "}
                                    {item.render(
                                        item.value,
                                        item.originalRecord
                                    )}{" "}
                                </p>
                            );
                        }
                    })}
                </Card>
            );
        });
    };

    return (
        <>
            <Spin spinning={isLoading}>
                {getCards(parseDataSource)}
                <Row justify="center">
                    <Pagination
                        defaultCurrent={pagination.current}
                        onChange={onChange}
                        total={pagination.total}
                    />
                </Row>
            </Spin>
        </>
    );
};

export default CardBox;
