import React, { useState } from 'react'
import useForm from './useForm'

const Form1 = () => {
  const {val, handleChange, handleSubmit,formData} = useForm({
    val1:"",
    val2:""
  })
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input name='val1' value={val.val1} type='email' placeholder='Enter email' onChange={handleChange}/><br/>
        <input name='val2'  value={val.val2} type='password' placeholder='Enter password' onChange={handleChange}/><br/>
        <input type='submit'/> 
    </form>
    <div>
        <p>Entered email : {formData.field1}</p>
        <p>Entered password : {formData.field2}</p>
    </div>
    </>
  )
}

export default Form1