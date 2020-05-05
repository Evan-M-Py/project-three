import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import FullAppPage from './Components/AppLandingPage/FullAppPage/FullAppPage'
import SignupPage from './Components/SignupForm';
import UserContext from './utils/userContext'
import { Switch, Route, useLocation } from 'react-router-dom';
import InventoryPage from './Components/AppLandingPage/InventoryTab/InventoryPage';
import SideNav from './Components/AppLandingPage/SideNav';
import LoginPage from './Components/LoginForm';
import TopNav from './Components/TopNav/TopNav.js';
import Dashboard from './Components/DashboardTab/Dashboard';
import ExpensePage from './Components/AppLandingPage/ExpenseTab/ExpensePage';


const App = (props) => {

    // in function for the sign up info in, in a .then set user to currentUserID
    //In the submit button, do an onclick

    const [userID, setUserID] = useState({})

    const location = useLocation()

    const style = {
        parentDiv: {
            display: "flex"
        }
    };

    const handleContextChange = (props) => {
        setUserID(props)
    };

    return (
        <div >
            {location.pathname !== '/signup' && location.pathname !== '/' && <TopNav />}
            <Switch>

                {/* -------------------------------------------------------------------------CHECK THIS OUT------------------------------------------------------------------- */}
                {/* <Route exact path="/" component={LoginPage} /> */}


                <Route exact path="/">
                    <LoginPage handleChange={handleContextChange} />
                </Route>

                <Route exact path="/signup" component={SignupPage} >
                    {/* <SignupPage userID={props.userID} /> */}
                    <SignupPage handleChange={handleContextChange} />
                </Route>



                {/* <div > */}
                <UserContext.Provider value={userID}>

                    <div style={style.parentDiv}>

                        {location.pathname !== '/signup' && location.pathname !== '/' && <SideNav />}

                        <Route exact path="/dashboard">
                            <Dashboard />
                        </Route>

                        <Route exact path="/inventory">
                            <InventoryPage />
                        </Route>

                        <Route exact path="/expenses">
                            <ExpensePage />
                        </Route>

                        {/* <Route path='*'>
                        <InventoryPage />
                    </Route> */}


                    </div>
                </UserContext.Provider>
            </Switch>
        </div>
    )
}

export default App;
