import React from "react";

const Input = props => {
    return(
        <input onChange={props.handleInputChange ? e=> props.handleInputChange(e) : null} name={props.name} className={props.className}/>
    )
};

export default Input;