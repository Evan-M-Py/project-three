// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Wrapper from '../wrapper';



// function SideNav() {

//     const style = {
//         navStyle: {
//             height: '100vh',
//             width: '30px',
//             backgroundColor: 'blue',
//             margin: '0'
//         },
//         buttonStyle: {

//         },
//         parent: {
//             display: 'flex'
//         }
//     }

//     return (
//         <div>
//             {/* <div style={style.parent}> */}
//             <Wrapper inside={(
//                 <div className='col-md-2' style={style.navStyle}>
//                     s
//                 </div>
//             )} />
//         </div>

//     )
// }

// export default SideNav;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from '../wrapper';
import SectionSelectorButton from './SectionSelectorButton';
import DashIcon from '../../icons/dash.png';
import ExpensesIcon from '../../icons/expenses.png';
import InventoryIcon from '../../icons/inventory.png';
function SideNav() {
    const style = {
        navStyle: {
            height: '100vh',
            width: '90px',
            backgroundColor: 'lightGrey',
            margin: '0',
            borderRadius: '0px, 6px, 6px, 0px'
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
                <SectionSelectorButton select={selectPage} buttonImg={DashIcon} sectionName='Dashboard' style={style.buttonStyle} />
                <SectionSelectorButton select={selectPage} buttonImg={ExpensesIcon} sectionName='Inventory' style={style.buttonStyle} />
                <SectionSelectorButton select={selectPage} buttonImg={InventoryIcon} sectionName='Expenses' style={style.buttonStyle} />
            </div>
        )} />
    )
}
export default SideNav;