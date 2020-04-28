import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const  InventoryTableDisplay = (props) => {


 const style = {
     tableLabels: {
         width:''
     }
 }

  return (
      <div>
          <BootstrapTable data={props.data}>
          <TableHeaderColumn isKey 
                             dataField='inv_id' 
                             dataAlign='center'
                             headerAlign="left"
                             width="75"
                             >
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='category'
                             dataAlign='center'
                             headerAlign="left"
                             width="175"
                             >
            Catagory
          </TableHeaderColumn>
          <TableHeaderColumn dataField='item_name'
                             dataAlign='center'
                             headerAlign="left"
                             width="325"
                             >
            Item Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='quantity_type'
                             dataAlign='center'
                             headerAlign="left"
                             width="100"
                             >
            Quantity Type
          </TableHeaderColumn>
          <TableHeaderColumn dataField='quantity'
                             dataAlign='center'
                             headerAlign="left"
                             width="100"
                             >
            Quantity
          </TableHeaderColumn>
          <TableHeaderColumn dataField='total_cost'
                             dataAlign='center'
                             headerAlign="left"
                             width="200"
                             >
            Cost
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
  )
}

export default InventoryTableDisplay;