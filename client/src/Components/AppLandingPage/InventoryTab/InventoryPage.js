import React, {useState} from 'react';
import {Row, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import InventoryDisplayTable from './InventoryTableDisplay';
import axios from "axios";



import ButtonForInventoryComponents from "./InsertInventoryButton"

function InventoryPage() {

    const [inv, setInv] = useState([{
        inv_id: '1',
        category: 'Dairy',
        item_name: 'Whole Milk',
        unit: 'gal',
        quantity: '3',
        price: 's'
      }
    ]);

    const [invDisplay, setInvDisplay] = useState([{

    }
  ]);


    const inventoryInsertAJAX = (thing) => {
      console.log(thing)
        return axios.post("/api/Inventory", thing );
        

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
