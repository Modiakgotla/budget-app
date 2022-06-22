
import React, {useState} from "react";
import "../css/add.css";

import {db} from '../config/firebase';

import {addDoc,collection} from 'firebase/firestore'
function AddItem (props){

    const[amount,setAmount] = useState('')
    const [item,setItem] = useState("");
    const [transactionType, settransactionType] = useState("");

    const add= (()=>{
        console.log(item)
        console.log(amount);
        console.log(transactionType);
        

        const collectionReF =collection(db, "transaction") ;

        const transaction = {
            item:item,
            amount: amount,
            transactionType:transactionType,
        };

        addDoc(collectionReF , transaction).then(()=>{
            alert("Added successfully")
        }).catch((error)=>{
            console.log(error) ;
        })

        props.add(amount,item,transactionType);
    })
    return(

    <div>
        <h1 style={{paddingTop:"5px"}}>Add transactions</h1>
        <input placeholder="Enter item" onChange={(e)=> setItem(e.target.value)}/> {" "}<br></br>
        <input placeholder="Enter amount" onChange={(e)=> setAmount(e.target.value)} />{" "} <br></br>


        <select onClick={(e)=>settransactionType(e.target.value)}>
            <option value = "Income">Income</option>
            <option value="Expense">Expense</option>
        </select> <br></br>

        <button id="btn" onClick={add}>add</button>
    </div>
    )
}

export default AddItem;