import React from "react";

const Input = props => {
    return(
        <input onChange={props.handleInputChange ? e=> props.handleInputChange(e) : null} value={props.value} name={props.name} className={props.className}/>
    )
};

export default Input;