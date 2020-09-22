import React from 'react'
import './Button.scss'

function Button(props) {
  const handleClick = () => {
    console.log('super')
  }
  return (
      <div className="Button" onClick={handleClick}>
        {props.name}
      </div>
  );
}

export default Button
