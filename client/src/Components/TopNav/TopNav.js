import React, { Component } from 'react';
import './TopNav.css';
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
    
    // style = {
    //     navStyle: {
    //         top: '20px',
    //         left: '10vw'
    //     }
    // }

    dummyOptions = ['dont', 'yell', 'at', 'me']

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
                

                
                <div>
                    <Brand />
                </div>

                    
                    

                <ul className={`navLinks ${this.state.toggle ? "nav-active" : ""}`}>
                {/* <li className="mx-2"><button className="btn btn-primary todo-btn">To Do List</button></li>
                    <li className="mx-2"><DropdownBase buttonLabel='Choose your Truck' options={this.dummyOptions}/></li>
                    
                    <li className="mx-2"><a className={`navLinkFade3 ${this.state.toggle ? "toggled" : ""}`} href="/dashboard">Dashboard</a></li>

                    <li className="mx-2"><a className={`navLinkFade1 ${this.state.toggle ? "toggled" : ""}`} href="/inventory">Inventory</a></li>

                    <li className="mx-2"><a className={`navLinkFade2 ${this.state.toggle ? "toggled" : ""}`} href="/expenses">Expenses</a></li> */}

                    <li className="mx-2"><a className={`navLinkFade4 ${this.state.toggle ? "toggled" : ""}`}  onClick={() => this.logoutFunction()} >Logout</a></li>

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


export default withRouter(TopNav);
