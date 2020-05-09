import React from "react";
import { Dropdown } from 'react-bootstrap';

const DropdownBase = props => {
    return(
        <Dropdown  className="dropdown">
            <Dropdown.Toggle id="dropdown-button">
                {props.buttonLabel}
            </Dropdown.Toggle>

            <Dropdown.Menu >
                {props.options.map((x) => (<Dropdown.Item onClick={(e) => props.handleDropdownChange(e.target.innerText)}>{x}</Dropdown.Item>))}
            </Dropdown.Menu>
        </Dropdown>
    )
};

export default DropdownBase;