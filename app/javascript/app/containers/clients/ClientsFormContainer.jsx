import { Form, message } from "antd";
import * as React from "react";
import { useFetch } from "../../../hooks/useFetch";
import {
    addAddressByClientId,
    addClient,
    editClientById,
    getClientById,
} from "../../../redux/clients/clientsServices";
import { getAllCompanies } from "../../../redux/companies/companiesServices";
import ClientsFormScreen from "../../../screens/ClientsFormScreen";

const ClientsFormContainer = ({ match, history }) => {
    const { params } = match;
    const [form] = Form.useForm();
    const { data, fetch } = useFetch(getClientById, params.id);
    const { data: companies } = useFetch(
        () => getAllCompanies({ page: 1, pageSize: 10000 }),
        "1"
    );

    React.useEffect(() => {
        form.setFieldsValue(
            data || {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                title: "",
                companyId: undefined,
            }
        );
    }, [form, data]);

    const onSubmit = (values) => {
        const companyId = values.company.id;
        delete values.company;
        if (params.id !== undefined) {
            editClientById(params.id, { ...values, companyId });
            history.push(`/clients/`);
            message.success("Has been edited with successfully");
        } else {
            addClient({ ...values, companyId }).then((res) => {
                history.push(`/clients/${res.data.id}`);
                message.success("Has been added with successfully");
            });
        }
    };

    const onSubmitAddresses = (values) => {
        if (params.id !== undefined) {
            addAddressByClientId(params.id, values).then((res) => {
                fetch(params.id);
                message.success("Has been added with successfully");
            });
        }
    };

    return (
        <ClientsFormScreen
            isEdit={params.id !== undefined}
            form={form}
            companies={companies}
            onSubmit={onSubmit}
            data={data}
            history={history}
            onSubmitAddresses={onSubmitAddresses}
        />
    );
};

export default ClientsFormContainer;
