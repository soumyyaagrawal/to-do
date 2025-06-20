import { useState } from 'react'
import React from 'react'
import './App.css';
import Todoform from './todoform.jsx';
import Todos from './todos.jsx';

function App() {

  const [todos, settodos ] = useState([{id:1, todo:"learn react", done:false},
    {id:2, todo:"buy apple", done:true},

  ])

  const addtodo= (newtodo)=> {settodos((prevState)=>[...prevState, newtodo]);
    
  };

  const completetodo= (id)=>{
    const newTodo=[]
    for (let todo of todos)
      {
        if(todo.id===id){
          newTodo.push ({...todo, done: !todo.done})
        }
        else{
          newTodo.push(todo);
        }

    }
    
    
settodos(newTodo);
  }

  const removetodo= (id)=>{
    settodos((prevState)=> prevState.filter((todo)=> todo.id!== id))
  }
  

  // console.log(todos)
  

  return (
  <div className="container">
    <h1>
      To Do! </h1>
    <Todoform addtodo={addtodo} />
    <Todos todos={todos} completetodo={completetodo} removetodo={removetodo}/>




    </div>
  );
}

export default App;
