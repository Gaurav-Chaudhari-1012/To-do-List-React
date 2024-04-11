import React from 'react'

const Form = (props) => {
  console.log(props);

  let { course, trainer, handleChange, handleSubmit} = props;

  return (
    <>
     <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="">Course</label>
            <input type="text" placeholder='Enter course name' name="course" value={course} onChange={handleChange}/>
        </div>

        <div className="form-group">
            <label htmlFor="">Trainer</label>
            <input type="text" placeholder='Enter Trainer name' name="trainer" value={trainer} onChange={handleChange}/>
        </div>

        <div className="form-group">
            <button className='btn'>Submit</button>
        </div>

     </form>
      
    </>
  )
}

export default Form
