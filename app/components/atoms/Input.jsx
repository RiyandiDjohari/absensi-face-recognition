import React from 'react'

const Input = ({ type, placeholder, name, className, value, onChange}) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      name={name} 
      id={name} 
      className={`${className} px-4 py-3 rounded-md`} 
      onChange={onChange} 
      value={value}
    />
  )
}

export default Input