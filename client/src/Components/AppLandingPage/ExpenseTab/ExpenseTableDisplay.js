import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const  ExpenseTableDisplay = (props) => {


 const style = {
     tableLabels: {
         width:''
     }
 }

  return (
    <div>
      <BootstrapTable data={props.data}>
        <TableHeaderColumn 
          isKey
          dataField='id'
          dataAlign='center'
          headerAlign="left"
          width="75"
        >
          ID
          </TableHeaderColumn>
        <TableHeaderColumn 
          dataField='catagory'
          dataAlign='center'
          headerAlign="left"
          width="175"
        >
          Catagory
          </TableHeaderColumn>
        <TableHeaderColumn 
          dataField='Expense'
          dataAlign='center'
          headerAlign="left"
          width="325"
        >
          Expense
          </TableHeaderColumn>
        <TableHeaderColumn 
          dataField='cost'
          dataAlign='center'
          headerAlign="left"
          width="100"
        >
          Cost
          </TableHeaderColumn>
      </BootstrapTable>
    </div>
  )
}

export default ExpenseTableDisplay;