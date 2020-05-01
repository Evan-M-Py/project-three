import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FullAppPage from './Components/AppLandingPage/FullAppPage/FullAppPage'
import SignupPage from './Components/SignupForm';
import { Switch, Route, useLocation} from 'react-router-dom';
import InventoryPage from './Components/AppLandingPage/InventoryTab/InventoryPage';
import SideNav from './Components/AppLandingPage/SideNav';
import LoginForm from './Components/LoginForm';
import ExpensePage from './Components/AppLandingPage/ExpenseTab/ExpensePage';



function App() {
 const location = useLocation()

  return (
    <div>
      {/* {location.pathname !== '/signup' && location.pathname !== '/' && <SideNav/>} */}
                        
    <Switch>

        <Route exact path="/">
            <LoginForm />
        </Route>
        <Route exact path="/signup">
        <SignupPage/>
        </Route>
        <Route exact path="/dashboard">                              
        <DashboardPage/>
        </Route>
        <Route exact path="/inventory">
        <InventoryPage/>
        </Route>
        <Route exact path="/expenses">
        <ExpensePage/>
        </Route>
        <Route path='*'>
            
        </Route>
    </Switch>
    {/* <FullAppPage/> */}
    
    </div>
  )
}


export default App;
