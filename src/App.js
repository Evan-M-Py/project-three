import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FullAppPage from './Components/AppLandingPage/FullAppPage/FullAppPage'
import SignupPage from './Components/SignupForm';



function App() {


  return (
    <div>
    <FullAppPage/>
    <SignupPage/>
    </div>
  )
}


export default App;
