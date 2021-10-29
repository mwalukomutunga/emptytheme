import { useEffect, useState } from "react";
import agent from "../Agent";
import Base from "../base";
import Content from "../components/content";
import DataTable from "../components/Table";

const Crops = () => {
    const [valuechain, setvaluechain]= useState([]);
    useEffect(() => {        
        agent.valuechain.list().then(response =>{
            setvaluechain(response);
        })

    }, []);

    const columns = ['id', 'name','variety'];
    return (
        <Base>
            <Content Page="Value chain" >
                <DataTable columns={columns} dataSource={valuechain}
                />
            </Content>
        </Base>
    );
}

export default Crops;