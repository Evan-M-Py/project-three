import React, {useState} from 'react';
import {Row, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseDisplayTable from './ExpenseTableDisplay';
import axios from "axios";



import ButtonForExpenseComponent from "./InsertExpenseButton"

function ExpensePage() {

    const [exp, setExp] = useState([{
        Expense: 'New Tires',
        price: '250.50',
        catagory: 'truck',
      }
    ]);

    const [expDisplay, setExpDisplay] = useState([{

    }
  ]);


    const expenseInsertAJAX = (thing) => {
      console.log(thing)
        return axios.post("/api/Expense", thing );
    }

    const expenseTableAJAX = (thing) => {
      console.log(thing)
        return axios.get("/api/Expense", thing ).then((res) => {
          setExpDisplay(res)
        });
    }




  return (
     <Container>
        <Row>
        <ButtonForExpenseComponent expenseAJAXPost={expenseInsertAJAX} />
        </Row>

        <Row>
           <ExpenseDisplayTable data={expDisplay} expItem={exp} /> 
        </Row>    
    </Container>
  )
}

export default ExpensePage;