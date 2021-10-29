import { useEffect, useState } from "react";
import agent from "../Agent";
import Base from "../base";
import Content from "../components/content";
import DataTable from "../components/Table";
import { Item } from 'devextreme-react/form';
import {
    Form
} from 'devextreme-react/data-grid';

const InsurancePeriods = () => {
    const [periods, setPeriods]= useState([]);
    useEffect(() => {        
        agent.ValidityPeriod.list().then(response =>{
            setPeriods(response);
        })

    }, []);
    const handleSave = (e) => {
        agent.ValidityPeriod.create(e);
    }

    const columns = ['periodName','dateFrom','dateTo'];
    return (
        <Base>
            <Content Page="Insurance Periods" >
            <DataTable columns={columns} dataSource={periods}
                    title="Insurance Periods"
                    handlesave={handleSave}
                    width={600}
                    height={350} >
                    <Form colCount={1}>
                        <Item dataField="periodName" />
                        <Item dataField="dateFrom" editorType="dxDateBox"  />
                        <Item dataField="dateTo" editorType="dxDateBox"  />
                    </Form>
                </DataTable>
            </Content>
        </Base>
    );
}

export default InsurancePeriods;