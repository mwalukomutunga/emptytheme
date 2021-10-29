import React from 'react';
import DataGrid, { Sorting, FilterPanel, Popup, HeaderFilter, Export, FilterRow, Editing, Selection, Paging, Pager } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';
const DataTable = ({ columns, dataSource, title, width, height,children }) => {
    const pageSizes = [10, 25, 50, 100];
    return (
        <DataGrid
            dataSource={dataSource}
            columnsAutoWidth="true"
            defaultColumns={columns}
            showBorders={true}
            showRowLines={true}
            rowAlternationEnabled={false}
        >
            <Editing            
                mode="popup"
                allowUpdating={true}
                allowAdding={true}
                allowDeleting={true}>
                <Popup title={title} showTitle={true} width={width} height={height} />
                {children}
            </Editing>
            <Selection mode="single" />
            <Sorting mode="multiple" />
            <FilterRow visible={true} />
            <FilterPanel visible={true} />
            <HeaderFilter visible={true} />
            <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
            <Paging defaultPageSize={10} />
            <Export enabled={true} allowExportSelectedData={false} />
        </DataGrid>
    );
}

export default DataTable;
