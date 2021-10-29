import { useEffect, useState } from "react";
import agent from "../Agent";
import Base from "../base";
import Content from "../components/content";
import DataTable from "../components/Table";

const InsuranceItems = () => {
    const [insuranceitems, setinsuranceitems] = useState([]);
    useEffect(() => {
        agent.insuranceItem.list().then(response => {
            setinsuranceitems(response);
        })

    }, []);

    const columns = ['name', 'valuechain', 'variety', 'location', 'expetedYieldPerAcre', 'costOfProductionPerAcre', 'averageSumInsured', 'premiumRateType', 'premiumRate'];
    return (
        <Base>
            <Content Page="Insurance Items" >
                <DataTable columns={columns} dataSource={insuranceitems}
                />
            </Content>
        </Base>
    );
}

export default InsuranceItems;