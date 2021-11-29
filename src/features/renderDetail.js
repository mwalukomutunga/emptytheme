import React from "react";
import "../features/itemcss.css";
import Form, { SimpleItem, ButtonItem } from 'devextreme-react/form';
import { SelectBox } from 'devextreme-react/select-box';
import agent from "../Agent";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
const RenderDetail = (data,children) => {
    let values = { Name: null, Value: 1, PremiumType: 1, ValueType: 2 }
    const buttonOptions = {
        text: 'Add',
        type: 'success',
        useSubmitBehavior: true,
        onClick: function (e) {
            agent.Costs.AddCostItem(data.key, values);
            swal("Item added sucessfully.");
        }
    };
    const TypeChanged = (e) => {
        values.PremiumType = e.value;
    }
    const ValueChanged = (e) => {
        values.ValueType = e.value;
    }
    const CostChanged = (e) => {
        values.Name = e.value;
    }
    const costs = getCosts();
    const premTypes = [{ Id: 1, name: "Premuim" }, { Id: 2, name: "SumAssured" }];
    const ValueTypes = [{ Id: 1, name: "Flat" }, { Id: 2, name: "Percent" }];

    return (
        
        <div className="employee-info">
            <div className="row">
                <div className="col">
                {children}
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered table-sm">
                            <thead>
                                <tr>
                                    <th >Cost</th>
                                    <th data-orderable="false">Premium Type</th>
                                    <th data-orderable="false">Value Type</th>
                                    <th data-orderable="false">Value</th>
                                    <th data-orderable="false">Action</th>
                                </tr>
                            </thead>                            
                            <CostList Id={data.key} costs={data.row.data.costs} />
                        </table>
                    </div>
                </div>
                <div className="col">                   
                    <div className="form-container">
                        <Form
                            formData={values}
                            colCount={2}
                            id="form"
                        >
                            <SimpleItem dataField="Cost" >
                                <SelectBox dataSource={costs} defaultValue={values.Name} onValueChanged={CostChanged} valueExpr="Name" searchEnabled={true} displayExpr="Name" />
                            </SimpleItem>
                            <SimpleItem dataField="Premium Type">
                                <SelectBox dataSource={premTypes} defaultValue={values.PremiumType} onValueChanged={TypeChanged} valueExpr="Id" searchEnabled={true} displayExpr="name" />
                            </SimpleItem>
                            <SimpleItem dataField="Value Type">
                                <SelectBox dataSource={ValueTypes} defaultValue={values.ValueType} onValueChanged={ValueChanged} valueExpr="Id" searchEnabled={true} displayExpr="name" />
                            </SimpleItem>
                            <SimpleItem dataField="Value" />
                            <ButtonItem colSpan="2" horizontalAlignment="right"
                                buttonOptions={buttonOptions}
                            />
                        </Form>
                    </div>
                </div>

            </div>

        </div>
    );
}
const getCosts = () => {
    var results = [];
    agent.Costs.list().then((res) => {
        res.map((row) => {
            return results.push(row);
        });

    });
    return results
}
function CostList(props) {
    const list = props.costs;
    const Id = props.Id;
    const handleRemove = (e) => {
        swal({
            title: "Are you sure?",
            text: "This item will be deleted parmanently.",
            // icon: "warning",
            buttons: true,
            // dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                agent.Costs.DeleteCostItem(Id, e);
              swal("Poof! Your file has been deleted!", {
                icon: "success",
              });
            }
          });
        
    }

    const listItems = list?.map((item, index) =>
        <tr key={index}>
            <td>{item.name}</td>
            <td>{item.PremiumType}</td>
            <td>{item.ValueType}</td>
            <td>{item.Value}</td>
            <td><Link to="/items" onClick={(e) => handleRemove(item.name)}>Remove</Link></td>
        </tr>
    );
    return (
        <tbody>{listItems}</tbody>
    );
}
export default RenderDetail;