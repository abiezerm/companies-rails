import * as React from "react";

const PAGE_SIZE = 10;

const useFetchPagination = (request) => {
    const [isLoading, setLoading] = React.useState(true);
    const [response, setResponse] = React.useState([]);
    const [pagination, setPagination] = React.useState({
        current: 1,
        pageSizeOptions: ["10", "20", "50", "100", "200"],
        showSizeChanger: true,
        showQuickJumper: true,
        defaultCurrent: 1,
        defaultPageSize: 10,
        pageSize: 10,
        position: "bottom",
        page: 1,
        total: 1,
        totalFiltered: 1,
        totalPages: 1,
    });

    const onChange = (page, pageSize) => {
        fetch({
            page: page,
            pageSize: pageSize,
        });
    };

    const fetch = React.useCallback(async (params) => {
        setLoading(true);
        const data = await request(params);
        setResponse(data.data);
        setPagination((prevPagination) => ({
            ...prevPagination,
            page: data.page,
            current: params.page,
            pageSize: params.pageSize,
            total: data.total,
            totalFiltered: data.totalFiltered,
            totalPages: data.totalPages,
        }));
        setLoading(false);
        return data;
    }, []);

    const rePagination = {
        ...pagination,
    };

    React.useEffect(() => {
        fetch &&
            fetch({
                page: 1,
                pageSize: PAGE_SIZE,
            });
    }, []);

    return { isLoading, onChange, pagination, rePagination, data: response };
};

export { useFetchPagination };
