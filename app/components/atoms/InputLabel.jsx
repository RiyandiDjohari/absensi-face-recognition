import React from 'react'

const InputLabel = ({ htmlFor, name, className }) => {
  return (
    <label htmlFor={htmlFor} className={`${className}`}>
      {name} :
    </label>
  )
}

export default InputLabel