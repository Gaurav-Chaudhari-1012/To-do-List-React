import React, { Fragment } from 'react'

const TodoList = (props) => {
    console.log(props);
    let {items, handleDelete,handleUpdate} = props;

  return (
    <section className='todo'>
        <h1>Course</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Course</th>
                    <th>Trainer</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {items.length > 0 && items.map((value)=>{
                return <Fragment key={value.id}>
                    <tr>
                        <td>{value.id.slice(0,8)}</td>
                        <td>{value.course}</td>
                        <td>{value.trainer}</td>
                        <td>
                        <button onClick={()=>handleUpdate(value.id)}>Update</button>
                        <button onClick={()=>handleDelete(value.id)}>Delete</button>   
                        </td>
                    </tr>
                </Fragment>
            })}
            </tbody>
        </table>
      
    </section>
  )
}

export default TodoList
