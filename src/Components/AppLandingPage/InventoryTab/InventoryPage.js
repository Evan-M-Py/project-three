import React, {useState} from 'react';
import {Row, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import InventoryDisplayTable from './InventoryTableDisplay';


import ButtonForInventoryComponents from "./InsertInventoryButton"

function InventoryPage() {

    const [inv, setInv] = useState([{
        item_name: 's',
        category: 's',
        quantity: 's',
        price: 's'
      }]);


    const inventoryInsertAJAX = () => {
        
        // I NEED HELP HERE!!!!

    }

  return (
     <Container>
        <Row>
        <ButtonForInventoryComponents invAJAXPost={inventoryInsertAJAX} />
        </Row>

        <Row>
           <InventoryDisplayTable invItem={inv} /> 
        </Row>    
    </Container>
  )
}

export default InventoryPage;
