import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from '../wrapper';
import SectionSelectorButton from './SectionSelectorButton';
import DashIcon from  '../../icons/dash.png';
import ExpensesIcon from  '../../icons/expenses.png';
import InventoryIcon from  '../../icons/inventory.png'; 


function SideNav() {

    const style = {
        navStyle: {
            height: '100vh',
            width: '90px',
            backgroundColor: '#556B80',
            margin: '0',
            borderRadius: '0px, 3px, 3px, 0px'
        },
        buttonStyle: {  
            marginTop: '30px',
            width: '80px',
            height: '80px'
        }
    }

    const selectPage = () => {

    };

  return (
    <Wrapper inside={(
        <div style={style.navStyle}>
            <SectionSelectorButton select={selectPage} buttonImg={DashIcon} sectionName='Dashboard' style={style.buttonStyle}/>
            <SectionSelectorButton select={selectPage} buttonImg={ExpensesIcon} sectionName='Inventory' style={style.buttonStyle}/>
            <SectionSelectorButton select={selectPage} buttonImg={InventoryIcon} sectionName='Expenses' style={style.buttonStyle}/>          
        </div>

    )}/>
  )
}

export default SideNav;