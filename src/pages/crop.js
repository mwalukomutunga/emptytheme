import { useEffect, useState } from "react";
import agent from "../Agent";
import Base from "../base";
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import {
    Form
} from 'devextreme-react/data-grid';

const Crops = () => {
    const [valuechain, setvaluechain] = useState([]);
    useEffect(() => {
        agent.valuechain.list().then(response => {
            setvaluechain(response);
            console.log(response);
        })
    }, []);
    const handleSave = (e) => {
        agent.valuechain.create(e);
    }

    const columns = ['Name', 'Variety'];
    return (
        <Base>
            <Content Page="Value chain" >
                <DataTable columns={columns} dataSource={valuechain}
                    title="Crop"
                    handlesave={handleSave}
                    width={600}
                    height={250} >
                    <Form colCount={1}>
                        <Item dataField="Name" />
                        <Item dataField="Variety" />
                    </Form>
                </DataTable>
            </Content>
        </Base>
    );
}

export default Crops;