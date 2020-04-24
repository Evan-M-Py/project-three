import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import Input from './InputBase'
import DropdownBase from "./DropdownBase";
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately

const quantityOptions = ['lbs.', 'oz.', 'dz.', ];
const catagoryOptions = ['Produce', 'Meat', 'Dairy','Non-Parishable', 'Spices', 'One-Off', 'Seasonal'];


function InventoryInsert(props) {

  const [text, setText] = useState({
    itemName: '',
    quantity: '',
    totalCost: ''

  });
  const [catagory, setCatagory] = useState(catagoryOptions[0]);
  const [quantityType, setQuantityType] = useState(quantityOptions[0]);


  const handleInputChange = (e) => {
    e.preventdefault();
    const { name, value } = e.target;

    setText((prevState) => ({
      ...prevState, [name]: value
     })
    )
  }

  return (
    <div>
      <form>
        <Input handleInputChange={handleInputChange} name='itemName' value={ text.itemName }/>
        <DropdownBase handleDropdownChange={setCatagory} name='catagory' value={catagory} options={catagoryOptions} />
        <DropdownBase handleDropdownChange={setQuantityType} name='quantityType' value={quantityType} options={quantityOptions} />
        <Input handleInputChange={handleInputChange} name='quantity' />
        <Input handleInputChange={handleInputChange} name='totalCost' />
        <Button />
      </form>
    </div>
  );
}

export default InventoryInsert;
