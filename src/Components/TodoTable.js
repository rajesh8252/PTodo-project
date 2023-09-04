import React, { useState } from 'react'
import TodoRow from './TodoRow'
const TodoTable = (props) => {
    return (
    <div className='card-body'>
        <table className='table table-hover'>
            <thead>
                    <tr>
                          <th scope="col">#</th>
                          <th scope="col">Description</th>
                          <th scope="col">Assigned</th>
                    </tr>
            </thead>
            <tbody>
                   <TodoRow rows={props.todo} setTodo={props.setTodo}/>  
            </tbody>
          </table>
        <button className='btn btn-primary'onClick={()=>props.setaddShowForm(!props.addShowForm)}>{props.addShowForm?'Close the window':'New Todo'}</button>
    </div>
  )
}

export default TodoTable