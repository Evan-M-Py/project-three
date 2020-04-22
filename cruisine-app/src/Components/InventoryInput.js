import React, { useState } from "react";
import Input from './InputBase'
import DropdownBase from "./DropdownBase";
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function InventoryInsert(props) {

    const [itemName ,setItemName] = useState();
    const [catagory,setCatagory] = useState();
    const [quantityType,setQuantityType] = useState();
    const [quantity,setQuantity] = useState();
    const [totalCost,setTotalCost] = useState();

    //------------------------------------------------------------------------------------------------------------------------
    //Do I need to write a handle change functions for each of the values in State??
    //------------------------------------------------------------------------------------------------------------------------

    const quantityOptions = ['lbs.', 'oz.', 'dz.', ];
    const catagoryOptions = ['Produce', 'Meat', 'Dairy','Non-Parishable', 'Spices', 'One-Off', 'Seasonal'];

  return (
    <div>
        <Input onChange={this.handleInputChange} name='itemName'/>
        <DropdownBase handleDropdownChange={this.handleInputChange} name='catagory' options={catagoryOptions}/>
        <DropdownBase handleDropdownChange={this.handleInputChange} name='quantityType' options={quantityOptions}/>
        <Input onChange={this.handleInputChange} name='quantity'/>
        <Input onChange={this.handleInputChange} name='totalCost'/>
    </div>
  );
}

export default InventoryInsert;
