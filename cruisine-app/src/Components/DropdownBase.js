import React from "react";
import { Dropdown } from 'react-bootstrap';

const DropdownBase = props => {
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                click here for options
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {props.options.map((x) => (<Dropdown.Item onClick={(e) => props.handleDropdownChange(e)}>{x}</Dropdown.Item>))}
            </Dropdown.Menu>
        </Dropdown>
    )
};

export default DropdownBase;