import Base from "../base";
import Content from "../components/content";
import DataTable from "../components/Table";

function FCSStreams() {

    const columns = ['County','Name of FSC', 'Phone Number','Sub County','Ward','Inputs ','PHHs ','Mechanisation ','Soil Testing','Spraying ','Markets','Finance '];
    return (
        <Base>
            <Content Page="FCS Streams" >
                <DataTable columns ={columns} dataSource ="data/streams.json"/>
            </Content>
        </Base>
    );
}

export default FCSStreams;