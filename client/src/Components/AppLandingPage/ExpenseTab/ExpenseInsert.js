import React, { useState } from "react";
import { Button, Row, Col, Container } from 'react-bootstrap';
import Input from '../../InputBase';
import DropdownBase from "../../DropdownBase";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately

const catagoryOptions = ['Kitchen Appliances/Tools', 'Vehicle', 'FOH Set Up','MISC'];


function ExpenseInsert(props) {

  const [text, setText] = useState({
    Expense: '',
    quantity: '',
    cost: ''

  });

  const [catagory, setCatagory] = useState(catagoryOptions[0]);


  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setText((prevState) => ({
      ...prevState, [name]: value
     })
    )
  };

  const expObj = {
    ...text,
    catagory,
  }


  const style = {
    container: {
      justifyContent: 'center'
    },
    itemLabel: {
       color: 'black', 
      textAlign: 'right',
      alignSelf: 'stretch',
      width:'90px',
      margin: '5px'
    },
    inputStyle: {
      marginTop: '2px',
      padding: '0',
      width: '150px'
    },
    inputCostStyle: {
      width: '60px',
      margin: '0',
      padding: '0'
    },
    dropdownStyle: {
      marginLeft: '4px',
      height: '15px'
    },
    button: {
      marginLeft: '4px',
      }
    
  };
  

  return (
    <Container style={style.container}>
        <Row>
          <p style={style.itemLabel}>Expense:</p>
          <Input style={style.inputStyle} placeholder='enter expense name' inputLabel='Item Name' handleInputChange={handleInputChange} name='item_name' value={ text.itemName }/>
          <DropdownBase buttonLabel={'select expense catagory'} style={style.dropdownStyle} handleDropdownChange={setCatagory} name='catagory' value={catagory} options={catagoryOptions} />
        </Row>
        <Row>
          <p style={style.itemLabel}>Cost: $</p>
          <Input style={style.inputCostStyle} placeholder='0000.00' handleInputChange={handleInputChange} name='cost' ></Input>
          <Button variant='primary' size='sm' style={style.button} onClick={() => props.expenseInsertAjax(expObj)}>Submit Item to Inventory</Button> 
        </Row> 
    </Container>
  );
};

export default ExpenseInsert;