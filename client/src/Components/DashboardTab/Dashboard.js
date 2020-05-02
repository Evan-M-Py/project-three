import React, { Component } from 'react';


class Dashboard extends Component {

    // state = {
    //     // Code goes here
    // }

    style = {
        graphs: {
            display: 'flex',
            justifyContent: 'space-around'
        },
        leftGraph: {
            width: '30vw',
            height: '50vh',
            backgroundColor: 'red',
            margin: '30px auto',
            color: 'whitesmoke',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px',
            fontWeight: 'bold'
        },
        rightGraph: {
            width: '30vw',
            height: '50vh',
            backgroundColor: 'blue',
            margin: '30px auto',
            color: 'whitesmoke',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px',
            fontWeight: 'bold'
        },
        infoDiv: {
            width: '90vw',
            height: '50vh',
            margin: '20px auto',
            backgroundColor: 'green',
            color: 'whitesmoke',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }

    render() {
        return (
            <div>
                <div className="graphs" style={this.style.graphs}>
                    <div className="leftGraph" style={this.style.leftGraph}>Left Graph</div>
                    <div className="rightGraph" style={this.style.rightGraph}>Right Graph</div>
                </div>
                <div className="graphInfotron" style={this.style.infoDiv}>
                    <ul>
                        <li>Stuff stuff stuff stuff, money is cool, right?</li>
                        <li>Trucks and stuff and such and boots and cats and boots and cats</li>
                        <li>Stuff and stuff and such</li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Dashboard;
