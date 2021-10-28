import React from 'react';
import DataGrid, { Sorting, FilterPanel, HeaderFilter, Export, FilterRow, Selection, Paging } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';
const DataTable =({columns,dataSource})  =>{
    return (
        <DataGrid
            dataSource={dataSource}
            columnsAutoWidth="true"
            defaultColumns={columns}
            showBorders={true}
            showRowLines={true}
            rowAlternationEnabled ={false}
        >
            <Selection mode="single" />
            <Sorting mode="multiple" />
            <FilterRow visible={true} />
            <FilterPanel visible={true} />
            <HeaderFilter visible={true} />
            <Paging defaultPageSize={10} />
            <Export enabled={true} allowExportSelectedData={false} />
            {/* <Export enabled={true} allowExportSelectedData={true} /> */}
        </DataGrid>
    );
}

export default DataTable;
