import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PieChart from './PieChart';
import BarGraph from './BarGraph';
import LineGraph from './LineGraph';


const Dashboard = (props) => {

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
        return axios.all([getProduce(), getBread(), getDairy(), getMeat(), getSpices(), getNonParish()]).then(axios.spread(function (prod, bread, dairy, meat, spices, nonPar) {
            const pieChartData = [prod.data.length, bread.data.length, dairy.data.length, meat.data.length, spices.data.length, nonPar.data.length];
            setPieChartData(pieChartData);
        })
    )};

    // const lineGraphAjax = () => {
    //     return axios.all([getProduce(), getBread(), getDairy(), getMeat(), getSpices(), getNonParish()]).then(axios.spread(function (prod, bread, dairy, meat, spices, nonPar) {
    //         console.log(prod);
    //         const lineGraphData = [prod.data.createdAt, bread.data.createdAt, dairy.data.createdAt, meat.data.createdAt, spices.data.createdAt, nonPar.data.createdAt];
    //         setLineGraphData(lineGraphData);
    //     })
    // )};

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
         axios.all([getMISC(), getFOH(), getTools(), getKitchenAppliances(), getVehicle()])
         .then(axios.spread(function (misc, foh, tools, kitchenApp, vehicle) {
            const barGraphData =  [foh.data.length, misc.data.length, tools.data.length, kitchenApp.data.length, vehicle.data.length];   
            setBarGraphData(barGraphData);
         })
    )};

    function allGraphAjax() {
        barGraphAjax();
        pieChartAjax();
        // lineGraphAjax();
    };

        const [ refresh, setRefresh ] = useState(true)

        function refreshSet() {
            setRefresh(refresh +1)
        }

     useEffect(() => {
         allGraphAjax()},
         [true]
     )

    const [ pieChartData, setPieChartData ] = useState();
    const [ barGraphData, setBarGraphData ] = useState();
    // const [ lineGraphData, setLineGraphData ] = useState();

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
        const style = {
            wrapper: {
                display: 'flex',
                width: '100vw',
                height: '50%',
                margin: '0',
                padding: '0'
            },
            graphs: {
                marginBottom: '35px'
            },
            button: {
                height: '50px',
                width: '125px',
                marginLeft: '20vw'
            }
        }


        return (
        <div>
            <div style={style.wrapper}>

                <div style={style.graphs} >
                    <PieChart graphData={pieChartData} />
                </div>
                <div style={style.graphs} >
                    <BarGraph graphData={barGraphData}/>
                </div>
            </div>
            {/* <div style={style.wrapper}>

                <div style={style.graphs} >
                    <LineGraph graphData={lineGraphData} />
                </div>
            </div> */}

        </div>
        )
    };


export default Dashboard;
