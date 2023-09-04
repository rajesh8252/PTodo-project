import { useState } from 'react';
import './App.css';
import TodoTable from './Components/TodoTable';
import NewTodoForm from './Components/NewTodoForm';
function App() {
  const [todo,setTodo]=useState([])
  
  const [addShowForm,setaddShowForm]=useState(false)
  
  const addTodo=(assign,desc)=>
  {
    
        let rownumber=0;
        if(todo.length<0)
        {
            rownumber=1;
        }
        else{
          rownumber=todo.length+1
        }
        const obj=
        {
            id: rownumber,
            description: desc,
            assigned: assign
        }
        const newtodo=[...todo,obj];
        setTodo(newtodo)
    }        
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header bg-primary text-light'>Todo List</div>
        <TodoTable todo={todo} setTodo={setTodo} addTodo={addTodo} setaddShowForm={setaddShowForm} addShowForm={addShowForm}/>
        {
        addShowForm&&<NewTodoForm addTodo={addTodo}/>
        }
        </div>
    </div>
  );
}

export default App;
