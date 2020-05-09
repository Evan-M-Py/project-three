import React, { Component } from 'react';
import './TopNav2.css';
import DropdownBase from '../DropdownBase';
import Brand from '../Brand'
import Axios from 'axios';
import { withRouter } from 'react-router-dom';



class TopNav extends Component {

    state = {
        toggle: false,
        trucks: ''
    }

    truckOptions = [this.state.trucks]

    logoutFunction = () => {
        Axios.get('/logout').then(

            this.props.history.push("/")
        )
        this.props.handleContextChange()
    };

    render() {
        console.log(this.props);
        return (
            <nav className="topNav">

                <div className="brand">
                    <Brand />
                </div>

                <ul className={`navLinks ${this.state.toggle ? "nav-active" : ""}`}>

                    <li className="brand text-center mb-3"><a className="logout" onClick={() => this.logoutFunction()} >Logout</a></li>

                </ul>

            </nav>
        )
    }
}


export default withRouter(TopNav);
