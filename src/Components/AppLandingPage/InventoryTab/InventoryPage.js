import React, {useState} from 'react';
import {Row, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import InventoryDisplayTable from './InventoryTableDisplay';


import ButtonForInventoryComponents from "./InsertInventoryButton"

function InventoryPage() {

    const [inv, setInv] = useState([{
        inv_id: '1',
        category: 'Dairy',
        item_name: 'Whole Milk',
        quantity: 's',
        price: 's'
      }
    ]);


    const inventoryInsertAJAX = () => {
        
        // I NEED HELP HERE!!!!

    }

  return (
     <Container>
        <Row>
        <ButtonForInventoryComponents invAJAXPost={inventoryInsertAJAX} />
        </Row>

        <Row>
           <InventoryDisplayTable data={inv} invItem={inv} /> 
        </Row>    
    </Container>
  )
}

export default InventoryPage;
