import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import FullAppPage from './Components/AppLandingPage/FullAppPage/FullAppPage'
import SignupPage from './Components/SignupForm';

import { Switch, Route, useLocation } from 'react-router-dom';
import InventoryPage from './Components/AppLandingPage/InventoryTab/InventoryPage';
import SideNav from './Components/AppLandingPage/SideNav';
import LoginForm from './Components/LoginForm';
import TopNav from './Components/TopNav/TopNav.js';
import Dashboard from './Components/DashboardTab/Dashboard';
import ExpensePage from './Components/AppLandingPage/ExpenseTab/ExpensePage';


const App = (props) => {

    // in function for the sign up info in, in a .then set user to currentUserID
    //In the submit button, do an onclick

    const state = {

    }

    const location = useLocation()

    const style = {
        parentDiv: {
            display: "flex"
        }
    }

    return (
        <div >
            {location.pathname !== '/signup' && location.pathname !== '/' && <TopNav />}
            <Switch>

                <Route exact path="/">
                    <LoginForm />
                </Route>

                <Route exact path="/signup">
                    {/* <SignupPage userID={props.userID} /> */}
                    <SignupPage />
                </Route>


                {/* <div > */}
                <div style={style.parentDiv}>
                    {location.pathname !== '/signup' && location.pathname !== '/' && <SideNav />}



                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>

                    <Route exact path="/inventory">
                        <InventoryPage />
                    </Route>

                    <Route exact path="/expenses">
                        <InventoryPage />
                    </Route>

                    {/* <Route path='*'>
                        <InventoryPage />
                    </Route> */}


                </div>

            </Switch>
        </div>
    )
}

export default App;
