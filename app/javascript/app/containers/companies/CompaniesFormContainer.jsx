import { Form, message } from "antd";
import * as React from "react";
import { Link } from "react-router-dom";
import { useDispatchPromise } from "../../../hooks/useDispatchPromise";
import { useFetch } from "../../../hooks/useFetch";
import { ActionCompanies } from "../../../redux/companies/companiesActions";
import {
    addCompany,
    editCompanyById,
    getCompanyById,
} from "../../../redux/companies/companiesServices";
import CompaniesFormScreen from "../../../screens/CompaniesFormScreen";

const CompaniesFormContainer = ({ match, history }) => {
    const { params } = match;
    const { data } = useFetch(getCompanyById, params.id);
    const { request } = useDispatchPromise(ActionCompanies.getAllClients);
    const [form] = Form.useForm();

    React.useEffect(() => {
        form.setFieldsValue(data);
    }, [form, data]);

    const handleSubmit = (values) => {
        if (params.id !== undefined) {
            editCompanyById(params.id, values).then((res) => {
                message.success("Has been edited with successfully");
                history.push("/companies");
            });
        } else {
            addCompany(values).then((res) => {
                message.success("Has been added with successfully");
                history.push(`/companies/${res.data.id}`);
            });
        }
    };

    const columns = [
        {
            title: "First name",
            dataIndex: "firstName",
            key: "firstName",
            render: (t, r) => <span>{t}</span>,
        },
        {
            title: "Last name",
            dataIndex: "lastName",
            key: "lastName",
            render: (t, r) => <span>{t}</span>,
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "email",
            render: (t, r) => <span>{t}</span>,
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            render: (t, r) => <span>{t}</span>,
        },
        {
            title: "Action",
            key: "action",
            render: (t, d) => (
                <span>
                    <Link to={`/clients/${d.id}`}>Show</Link>
                </span>
            ),
        },
    ];

    return (
        <CompaniesFormScreen
            isEdit={params.id !== undefined}
            form={form}
            onSubmit={handleSubmit}
            request={request}
            columns={columns}
            id={params.id}
        />
    );
};

export default CompaniesFormContainer;
