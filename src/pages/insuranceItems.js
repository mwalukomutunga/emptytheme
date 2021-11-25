import React, { useEffect, useState } from "react";
import agent from "../Agent";
import Base from "../base";
import Content from "../components/content";
import DataTable from "../components/Table";
import { SimpleItem } from 'devextreme-react/form';
//import { SimpleItem, GroupItem } from 'devextreme-react/form';
import { Form } from 'devextreme-react/data-grid';
import { SelectBox } from 'devextreme-react/select-box';



const InsuranceItems = () => {
    const [insuranceitems, setinsuranceitems] = useState([]);
    const [periods, setPeriods] = useState([]);
    const [Items, setItems] = useState([]);
    //const [PremiumType] = useState([{ 'id': 1, 'name': "Percent" }, { 'id': 2, 'name': "Flat", }]);
    useEffect(() => {
        agent.insuranceItem.list().then(response => {
            setinsuranceitems(response);
        })
        agent.ValidityPeriod.list().then(res => {
            setPeriods(res);
        })
        agent.valuechain.list().then(res => {
            setItems(res);
        })
    }, []);
    const handleSave = (e) => {
        //console.log(e);
        //  agent.insuranceItem.create(e);
    }


    const columns = [ 'Id','LOCATION','VALUECHAIN', 'ExpectedYieldperAcre', 'CostofproductionperAcre', 'PREMIUMRATE'];
    return (
        <Base>
            <Content Page="Insurance Items" >
                <DataTable columns={columns} dataSource={insuranceitems} title="Insurance items" width={850} height ={520}
                    handlesave={handleSave}
                >
                    <Form colCount={2}>
                        <SimpleItem dataField="Name" />
                        <SimpleItem dataField="Period">
                            <SelectBox dataSource={periods} valueExpr="PeriodName" searchEnabled={true} displayExpr="PeriodName" />
                        </SimpleItem>
                        <SimpleItem dataField="Value chain">
                            <SelectBox dataSource={Items} valueExpr="Id" searchEnabled={true} displayExpr="Name" />
                        </SimpleItem>
                        <SimpleItem dataField="Country">
                            <SelectBox dataSource="data/countries.json" value="Kenya" valueExpr="name" searchEnabled={true} displayExpr="name" />
                        </SimpleItem>
                        <SimpleItem dataField="County">
                            <SelectBox dataSource="data/counties.json" valueExpr="code" searchEnabled={true} displayExpr="name" />
                        </SimpleItem>
                        {/* <SimpleItem dataField="County" />                           */}
                        {/* <SimpleItem dataField="subCounty" />
                        <SimpleItem dataField="ward" /> */}
                        <SimpleItem dataField="expetedYieldPerAcre" />
                        <SimpleItem dataField="costOfProductionPerAcre" />
                        {/* <SimpleItem dataField="costOfProductionPerAcre" /> */}
                        <SimpleItem  dataField="premiumRate" />
                        {/* <GroupItem caption="Premium">
                            <SimpleItem dataField="Premium Value type">
                                <SelectBox dataSource={PremiumType} value={1} valueExpr="id" searchEnabled={true} displayExpr="name" />
                            </SimpleItem>
                            <SimpleItem editorType="" dataField="premiumRate" />
                        </GroupItem> */}
                        <SimpleItem itemType="button"
                            horizontalAlignment="left"
                            cssClass="add-phone-button"
                        >
                        </SimpleItem>
                    </Form>
                </DataTable>
            </Content>
        </Base>
    );
}



export default InsuranceItems;