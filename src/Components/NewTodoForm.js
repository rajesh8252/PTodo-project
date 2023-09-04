import React, { useState } from 'react'

const NewTodoForm = (props) => {
    const[assign,setAssign]=useState('')
    const[desc,setDesc]=useState('')
    const assignName=(a)=>
    {
        setAssign(a);
    }
    const assignDesc=(d)=>
    {
        setDesc(d);
    }
    const submitTodo=(assign,desc)=>
    {
        if(assign!=='' || desc!=='')
        {
            props.addTodo(assign,desc);
            setAssign('')
            setDesc('')
        }
    }
  return (
    <div className='mt-5'>
        <form  onSubmit={e => e.preventDefault()}>
            <div className='mb-3'>
                <label className='form-label'>Assigned</label>
                <input type='text' 
                className='form-control' 
                onChange={(e)=>assignName(e.target.value)}
                value={assign}
                ></input>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <textarea 
                rows={3} 
                className='form-control'
                onChange={(e)=>assignDesc(e.target.value)}
                value={desc}
                ></textarea>
            </div>
            <button className='btn btn-primary mt-3'onClick={()=>submitTodo(assign,desc)}>Add Todo</button>
        </form>
    </div>
  )
}

export default NewTodoForm