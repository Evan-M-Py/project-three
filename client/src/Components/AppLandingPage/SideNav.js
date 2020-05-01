import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from '../wrapper';



function SideNav() {

    const style = {
        navStyle: {
            height: '100vh',
            width: '30px',
            backgroundColor: 'blue',
            margin: '0'
        },
        buttonStyle: {

        }
    }

  return (
    <Wrapper inside={(
        <div className='col-md-2' style={style.navStyle}>
            s
        </div>
    )}/>
  )
}

export default SideNav;