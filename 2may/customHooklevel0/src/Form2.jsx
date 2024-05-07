import React from 'react'
import { useState } from 'react'
import useForm from './useForm'

const Form2 = () => {
    const {val, handleChange, handleSubmit,formData} = useForm({
                                                    val1:"",
                                                    val2:""
                                                })
  return (
<>
    <form onSubmit={handleSubmit}>
        <input name='val1' value={val.val1} type='text' placeholder='Enter first name' onChange={handleChange}/><br/>
        <input name='val2' value={val.val2} type='text' placeholder='Enter last name' onChange={handleChange}/><br/>
        <input type='submit'/> 
    </form>
    <div>
    <p>Entered FirstName : {formData.field1}</p>
    <p>Entered LastName : {formData.field2}</p>
    </div>
</>
  )
}

export default Form2