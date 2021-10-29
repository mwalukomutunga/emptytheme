import { useEffect, useState } from "react";
import agent from "../Agent";
import Base from "../base";
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import {
    Form, Column, Lookup
} from 'devextreme-react/data-grid';

const InsuranceItems = () => {
    const [insuranceitems, setinsuranceitems] = useState([]);
    const [periods, setPeriods] = useState([]);
    useEffect(() => {
        agent.insuranceItem.list().then(response => {
            setinsuranceitems(response);
        })
        agent.ValidityPeriod.list().then(response => {
            setPeriods(response);
        })
    }, []);
    const handleSave = (e) => {
        agent.insuranceItem.create(e);
    }

    const columns = ['name', 'valuechain', 'variety', 'location', 'expetedYieldPerAcre', 'costOfProductionPerAcre', 'averageSumInsured', 'premiumRateType', 'premiumRate'];
    return (
        <Base>
            <Content Page="Insurance Items" >
                <DataTable columns={columns} dataSource={insuranceitems}
                    title="Insurance Items"
                    handlesave={handleSave}
                    width={850}
                    height={400} >
                    <Form colCount={2}>
                        <Item dataField="name" />
                        <Item dataField="periodId" />
                        <Item dataField="Country" />
                        <Item dataField="value_ChainId" />
                        <Item dataField="county" />
                        <Item dataField="subCounty" />
                        <Item dataField="ward" />
                        <Item dataField="expetedYieldPerAcre" />
                        <Item dataField="costOfProductionPerAcre" />
                        <Item dataField="premiumRateType" />
                        <Item dataField="premiumRate" />
                    </Form>
                    <Column dataField="periodId" caption="Period" >
                        <Lookup dataSource={periods} valueExpr="id" displayExpr="periodName"/>
                    </Column>
                </DataTable>
            </Content>
        </Base>
    );
}

export default InsuranceItems;