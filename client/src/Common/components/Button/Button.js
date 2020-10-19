import React from 'react'
import './Button.scss'

function Button({name, logoutHandler}) {
  return (
      <div className="Button" onClick={(e) => logoutHandler(e)}>
        {name}
      </div>
  );
}

export default Button
