import React, { useEffect, useState } from "react";
import agent from "../Agent";
import Content from "../components/content";
import "../features/itemcss.css";
import Form, { SimpleItem, ButtonItem } from 'devextreme-react/form';
import { SelectBox } from 'devextreme-react/select-box';
//import { Form } from 'devextreme-react/data-grid';
import DataGrid, {
    Column,
    MasterDetail,
    Selection,
    Editing,
    Popup
} from 'devextreme-react/data-grid';

import RenderDetail from "../features/renderDetail";
import Base from "../base";

const InsuranceItems = () => {
    const [insuranceitems, setinsuranceitems] = useState([]);
    // const [periods, setPeriods] = useState([]);
    //const [Items, setItems] = useState([]);
    const [Costs, setCosts] = useState([]);
    useEffect(() => {
        agent.insuranceItem.list().then(response => {
            setinsuranceitems(response);
        })
        // agent.ValidityPeriod.list().then(res => {
        //     setPeriods(res);
        // })
        // agent.valuechain.list().then(res => {
        //     setItems(res);
        // })
        agent.Costs.list().then(res => {
            setCosts(res);
        })
    }, []);
    // const handleSave = (e) => {
    //     //console.log(e); 
    //     //  agent.insuranceItem.create(e);
    // }

    const contentReady = (e) => {
        if (!e.component.getSelectedRowKeys().length) { e.component.selectRowsByIndexes(0); }
    }

    const selectionChanged = (e) => {
        e.component.collapseAll(-1);
        e.component.expandRow(e.currentSelectedRowKeys[0]);
    }

    const columns = ['Id', 'LOCATION', 'VALUECHAIN', 'ExpectedYieldperAcre', 'CostofproductionperAcre', 'PREMIUMRATE'];
    return (
        <Base>
            <Content Page="Insurance Items" >
                <DataGrid
                    id="grid-container"
                    columnsAutoWidth="true"
                    defaultColumns={columns}
                    showBorders={true}
                    showRowLines={true}
                    dataSource={insuranceitems}
                    keyExpr="Id"
                    onSelectionChanged={selectionChanged}
                    onContentReady={contentReady}
                    showBorders={true}
                    showRowLines={true}
                    rowAlternationEnabled={false}
                    columnHidingEnabled={false}
                    Costs={Costs}
                >
                    <Editing
                        mode="popup"
                        allowUpdating={false}
                        allowAdding={true}
                        allowDeleting={true}
                    >
                        <Popup title="Insurance Item" showTitle={true} width={800} height={500} />
                        <Form colCount={1}>
                            <SimpleItem dataField="Name" />
                            <SimpleItem dataField="Location" />
                            <SimpleItem dataField="ValueChain" />
                            <SimpleItem dataField="ExpectedYieldperAcre" />
                            <SimpleItem dataField="CostOfProductionPerAcre" />
                            <SimpleItem dataField="PREMIUMRATE" />
                        </Form>
                    </Editing>
                    <Selection mode="single" />
                    {/* <Column dataField="Name" />
                    <Column dataField="Location" />
                    <Column dataField="ValueChain" />
                    <Column dataField="ExpectedYieldperAcre" />
                    <Column dataField="CostOfProductionPerAcre" />
                    <Column dataField="PREMIUMRATE" />
                    <SimpleItem dataField="Cost" >
                        <SelectBox dataSource="/data/countries" displayExpr="Name" />
                    </SimpleItem> */}
                    <MasterDetail enabled={true} render={RenderDetail} >
                    </MasterDetail>
                </DataGrid>
            </Content>
        </Base>
    );
}

export default InsuranceItems;