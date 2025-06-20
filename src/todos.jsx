import React from "react";
import Todo from "./todo.jsx";
function Todos( {todos, completetodo, removetodo} ) {
    console.log(todos)
  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo)=> (<Todo {...todo} key={todo.id} completetodo={completetodo} removetodo={removetodo}/>))

}
    </div>
  );    
}

export default Todos;