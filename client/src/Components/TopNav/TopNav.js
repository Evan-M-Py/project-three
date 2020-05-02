import React, { Component } from 'react';
import './TopNav.css';
import DropdownBase from '../DropdownBase';


class TopNav extends Component {

    state = {
        toggle: false,
        trucks: ''
    }

    truckOptions = [this.state.trucks]
    
    style = {
        navStyle: {
            top: '20px',
            left: '10vw'
        }
    }

    

    render() {
        return (
            <nav className="topNav">
                <div className="logo">
                    <h4>Crusine</h4>
                </div>

                    <DropdownBase style={this.style.navStyle} buttonLabel='Choose your Truck' options={this.dummyOptions}/>

                <ul className={`navLinks ${this.state.toggle ? "nav-active" : ""}`}>
                    <li><a className={`navLinkFade1 ${this.state.toggle ? "toggled" : ""}`} href="#">Inventory</a></li>

                    <li><a className={`navLinkFade2 ${this.state.toggle ? "toggled" : ""}`} href="#">Expenses</a></li>

                    <li><a className={`navLinkFade3 ${this.state.toggle ? "toggled" : ""}`} href="#">Settings</a></li>

                    <li><a className={`navLinkFade4 ${this.state.toggle ? "toggled" : ""}`} href="#">Logout</a></li>

                </ul>

                <div className="burger" onClick={() => this.setState({ toggle: !this.state.toggle })}>
                    <div className={`line1 ${this.state.toggle ? "toggle" : ""}`}></div>

                    <div className={`line2 ${this.state.toggle ? "toggle" : ""}`}></div>

                    <div className={`line3 ${this.state.toggle ? "toggle" : ""}`}></div>

                </div>
            </nav>
        )
    }
}


export default TopNav;
