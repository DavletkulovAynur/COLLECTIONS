import React from 'react'
import './Shruggie.scss'

export function Shruggie({text =''}) {
  return (
    <div className='Shruggie Shruggie-root'>
      <span>¯\_(ツ)_/¯</span>
      <div className='Shruggie__text'>{text}</div>
    </div>
  )
}