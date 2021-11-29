import React, { useEffect, useState } from "react";
import agent from "../Agent";
import Content from "../components/content";
import "../features/itemcss.css";
import { SelectBox } from 'devextreme-react/select-box';
import { RequiredRule, SimpleItem } from 'devextreme-react/form';
import DataGrid, {
    Form,
    MasterDetail,
    Selection,
    Editing,
    Popup
} from 'devextreme-react/data-grid';

import RenderDetail from "../features/renderDetail";
import Base from "../base";

const InsuranceItems = () => {
    const [insuranceitems, setinsuranceitems] = useState([]);
    const [periods, setPeriods] = useState([]);
    const [Items, setItems] = useState([]);
    //const [Costs, setCosts] = useState([]);
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
        // agent.Costs.list().then(res => {
        //     setCosts(res);
        // })
    }, []);
    const saving = (e) => {
       console.log(e)
    }
    const deleterecord = (e) => {
        
    }

    const contentReady = (e) => {
        if (!e.component.getSelectedRowKeys().length) { e.component.selectRowsByIndexes(0); }
    }

    const selectionChanged = (e) => {
        e.component.collapseAll(-1);
        e.component.expandRow(e.currentSelectedRowKeys[0]);
    }

    const columns = ['Name', 'Country', 'Location', 'Period', 'ValueChain', 'ExpectedYieldperAcre', 'CostOfProductionPerAcre', 'PremiumRate'];
    return (
        <Base>
            <Content Page="Insurance Items" >
                <DataGrid
                  id="grid-container"
                  columnsAutoWidth="true"
                  defaultColumns={columns}
                  showRowLines={true}
                  dataSource={insuranceitems}
                  keyExpr="Id"
                  onSelectionChanged={()=>selectionChanged()}
                  onContentReady={() =>contentReady}
                  showBorders={true}
                  rowAlternationEnabled={false}
                  columnHidingEnabled={false}
                  onRowInserting={(e) => saving(e)}
                   onRowRemoving={deleterecord}
                >
                    <Editing
                        mode="popup"
                        allowUpdating={false}
                        allowAdding={true}
                        allowDeleting={true}
                    >
                        <Popup title="Insurance Item" showTitle={true} width={800} height={400} />
                        <Form colCount={2}>
                            <SimpleItem dataField="Name">
                                <RequiredRule />
                            </SimpleItem>
                            <SimpleItem dataField="Country" >
                                <SelectBox dataSource="/data/countries.json" defaultValue="Kenya" valueExpr="name" displayExpr="name" />
                                <RequiredRule />
                            </SimpleItem>
                            <SimpleItem dataField="Location" >
                                <SelectBox dataSource="/data/counties.json" valueExpr="name" displayExpr="name" />
                                <RequiredRule />
                            </SimpleItem>
                            <SimpleItem dataField="Period" >
                                <SelectBox dataSource={periods} defaultValue={periods[0]?.PeriodName} valueExpr="PeriodName" displayExpr="PeriodName" />
                                <RequiredRule />
                            </SimpleItem>
                            <SimpleItem dataField="ValueChain" >
                                <SelectBox dataSource={Items} valueExpr="Name" displayExpr="Name" />
                                <RequiredRule />
                            </SimpleItem>
                            <SimpleItem dataField="ExpectedYieldperAcre" >
                            <RequiredRule />
                            </SimpleItem>
                            <SimpleItem dataField="CostOfProductionPerAcre">
                                <RequiredRule />
                            </SimpleItem>
                            <SimpleItem dataField="PremiumRate" >
                                <RequiredRule />
                            </SimpleItem>
                        </Form>
                    </Editing>
                    <Selection mode="single" />
                    <MasterDetail enabled={true} render={RenderDetail} />

                </DataGrid>
            </Content>
        </Base>
    );
}

export default InsuranceItems;