import React, { useState } from 'react'

const useForm = (initialState) => {
  const[val, setVal] = useState(initialState);
  const[formData,setFormData] = useState({
    field1:"",
    field2:""
  });
  const handleChange = (e) => {
    setVal({...val, [e.target.name]: e.target.value})
    setFormData({
        field1:"",
        field2:""
      })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({field1:val.val1,field2:val.val2})
    setVal(initialState);
  }
//   const resstForm = () => {
//     setVal(initialState);
//   }
  return {val, handleChange, handleSubmit,formData}
}

export default useForm