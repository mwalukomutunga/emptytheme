import Base from "../base";
import Content from "../components/content";
import DataTable from "../components/Table";

function FCS() {

    const columns = ['County', 'Sub-County', 'Ward', 'Name Of Fsc', 'FSC Code','Gender','Age','Year Of Joining','Phone Number'];
    return (
        <Base>
            <Content Page="FCS" >
                <DataTable columns ={columns} dataSource ="data/fscs.json"/>
            </Content>
        </Base>
    );
}

export default FCS;