import React from "react";
import Wrapper from './wrapper'

const Input = props => {

    return (
        <Wrapper>
            <input 
            style={props.style} 
            onChange={props.handleInputChange ? e => props.handleInputChange(e) : null} 
            value={props.value} name={props.name}  
            className={props.className} 
            placeholder={props.placeholder}/>
        </Wrapper>
    )
};

export default Input;