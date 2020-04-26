import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

function InventoryTableDisplay(props) {




  return (
      <div>
          <Table>
              <thead>
                  <tr>
                      <th>item ID #</th>
                      <th>Item Category</th>
                      <th>Item Name</th>
                      <th>Quantity</th>
                      <th>Cost</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                  {props.invItem.map((x) => (
                     <div> 
                      <td>{props.invItem.item_name}</td>
                      <td>{props.invItem.category}</td>
                      <td>{props.invItem.quantity}</td>
                      <td>{props.invItem.unit}</td>
                      <td>{props.invItem.price}</td>
                      </div>
                  ))}
                      
                  </tr>
              </tbody>
          </Table>
      </div>
  )
}

export default InventoryTableDisplay;