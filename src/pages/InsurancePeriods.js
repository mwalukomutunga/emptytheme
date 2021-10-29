import { useEffect, useState } from "react";
import agent from "../Agent";
import Base from "../base";
import Content from "../components/content";
import DataTable from "../components/Table";

const InsurancePeriods = () => {
    const [costs, setCosts]= useState([]);
    useEffect(() => {        
        agent.ValidityPeriod.list().then(response =>{
            setCosts(response);
        })

    }, []);

    const columns = ['id', 'periodName','dateFrom','dateTo'];
    return (
        <Base>
            <Content Page="Insurance Periods" >
                <DataTable columns={columns} dataSource={costs}
                />
            </Content>
        </Base>
    );
}

export default InsurancePeriods;