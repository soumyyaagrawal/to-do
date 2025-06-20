import react from 'react';
import {ImCross} from "react-icons/im"

function Todo({id, todo, done, completetodo, removetodo}){

    return(
        <div className='tododiv'>
            
            <div className='todotit'>
       <input type="checkbox" checked={done} onChange={()=> completetodo(id)}></input>
      <h3 className={`${done?"completed": ""}`}>{todo }</h3> 
     </div>
     <div className='crosbtn' onClick={()=>removetodo(id)}> <ImCross /> </div>
     
    </div>
  
    )
}
export default Todo