import { Component } from 'react';
import ContainerForTodos from '../TodoList'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PieChart from './PieChart';
import BarGraph from './BarGraph'


const Dashboard = (props) => {
    console.log(props)
    // state = {
    //     // Code goes here
    // }

    function getProduce() {
       return axios.get('/api/pieChart/Produce/' + props.userID)
    };

    function getBread() {
        return  axios.get('/api/pieChart/Bread/' + props.userID)
    };

    function getDairy() {
        return axios.get('/api/pieChart/Dairy/' + props.userID)
    };

    function getMeat() {
        return  axios.get('/api/pieChart/Meat/' + props.userID)
    };

    function getSpices() {
        return  axios.get('/api/pieChart/Spices/' + props.userID)
    };

    function getNonParish() {
        return  axios.get('/api/pieChart/Non-Parish/' + props.userID)
    };


    const pieChartAjax = () => {
        axios.all([getProduce(), getBread(), getDairy(), getMeat(), getSpices(), getNonParish()]).then(axios.spread(function (prod, bread, dairy, meat, spices, nonPar) {
            console.log(prod, bread, dairy, meat, spices, nonPar)
        }))
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    function getKitchenAppliances() {
        return axios.get('/api/barGraph/Kitchen-Appliances/' + props.userID)
     };
 
     function getTools() {
         return  axios.get('/api/barGraph/Tools/' + props.userID)
     };
 
     function getVehicle() {
         return axios.get('/api/barGraph/Vehicle/' + props.userID)
     };
 
     function getFOH() {
         return  axios.get('/api/barGraph/FOH/' + props.userID)
     };
 
     function getMISC() {
         return  axios.get('/api/barGraph/MISC/' + props.userID)
     };
 
 
     const barGraphAjax = () => {
         axios.all([getMISC(), getFOH(), getVehicle(), getTools(), getKitchenAppliances()]).then(axios.spread(function (misc, foh, tools, kitchenApp, vehicle) {
             console.log(misc, foh, tools, kitchenApp, vehicle)
         }))
     };

    const pieChartData = {};
    const barGraphData = {};

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

   const style = {
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


        return (
            <div>
                <div className="graphs" style={style.graphs} run={pieChartAjax()} run2={barGraphAjax()} >
                    <div className="leftGraph" style={style.leftGraph}><PieChart data={pieChartData}/></div>
                    <div className="rightGraph" style={style.rightGraph}><BarGraph data={barGraphData}/></div>
                </div>
                <div className="graphInfotron" style={style.infoDiv}>
                    <ul>
                        <li>Stuff stuff stuff stuff, money is cool, right?</li>
                        <li>Trucks and stuff and such and boots and cats and boots and cats</li>
                        <li>Stuff and stuff and such</li>
                    </ul>
                </div>
                <ContainerForTodos/>
            </div>
        )
    }


export default Dashboard;
