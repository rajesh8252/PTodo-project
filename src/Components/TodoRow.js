import React from 'react'
import TodoRowItem from './TodoRowItem'
const TodoRow = (props) => {
  return (
            <>
            {props.rows.map(row=>
            (
                <TodoRowItem key={row.id} id={row.id} desc={row.description} assign={row.assigned} setTodo={props.setTodo} todo={props.rows}/>
            ))}
            </>
  )
}

export default TodoRow