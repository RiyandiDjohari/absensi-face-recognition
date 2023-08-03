  import React from 'react'

  const Button = ({ onClick, className, name, icon, iconStyle}) => {
    return (
      <button onClick={onClick} className={`${className} text-white px-4 py-3 rounded-md flex items-center justify-center gap-1`}>
        <div>{icon && React.createElement(icon, {size: `${iconStyle}` })}</div>
        <span>{name}</span>
      </button>
    )
  }

  export default Button