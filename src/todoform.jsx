import react from 'react';
import {v4 as uuid} from "uuid";
import { useState } from 'react';
import {toast} from 'react-toastify';

import './App.css';

function Todoform({addtodo}){
     const [title, settitle]= useState("");
     
    let saveTodo=  (event) => {
          event.preventDefault();
        if (title.trim().length ===0){
            toast.error("please fill the input");
            return;
        }
        const newtodo={
            todo: title,
            done: false,
            id: uuid()
        }
    addtodo(newtodo);
    settitle("");
  
    
        
    }
    return(
        <form onSubmit={saveTodo}>
            <input type="text" name="todo" value={title} onChange={(e)=> settitle(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    )
}
export default Todoform;