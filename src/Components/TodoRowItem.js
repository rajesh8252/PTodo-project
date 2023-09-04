import React from 'react';

const TodoRowItem = (props) => {
  const deleteTheRow = (id) => {
    // Filter out items with matching IDs and create a new array
    const newItems = props.todo.filter((value) => value.id !== id);
    props.setTodo(newItems);
    console.log(props.todo)
  };

  return (
    <tr onClick={() => deleteTheRow(props.id)}>
      <th>{props.id}</th>
      <td>{props.desc}</td>
      <td>{props.assign}</td>
    </tr>
  );
};

export default TodoRowItem;
