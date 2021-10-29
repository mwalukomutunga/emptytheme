import { useEffect, useState } from "react";
import agent from "../Agent";
import Base from "../base";
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item} from 'devextreme-react/form';
import {
    Form
} from 'devextreme-react/data-grid';

const InsuranceCosts = () => {
    const [costs, setCosts] = useState([]);
    // const [record, setRecord] = useState({ name: "Life cover" });
    useEffect(() => {
        agent.Costs.list().then(response => {
            setCosts(response);
        })

    }, []);

    const columns = ['name'];
    return (
        <Base>
            <Content Page="Insurance extra Costs" >
                <DataTable columns={columns} dataSource={costs}
                    title="Insurance extra Costs"
                    width={300}
                    height={250} >
                    <Form colCount ={1}>
                        <Item dataField="name" />
                    </Form>
                </DataTable>
            </Content>
        </Base>
    );
}

export default InsuranceCosts;