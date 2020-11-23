import React from 'react'
import './styles/FeatureBgGradient.scss'

export function FeatureBgGradient({certainCollection}) {
  const bg = {
    background: `linear-gradient(rgba(15, 15, 15, 0), 
                 rgb(21, 21, 21)), 
                 linear-gradient(rgba(21, 21, 21, 0.8), 
                 rgba(21, 21, 21, 0.5)), 
                 url(${certainCollection.img}) no-repeat top center` }
  return (
    <div className='Bg-wrapper'>
      <div className='Bg-wrapper__art-wrapper'>
        <div style={bg}  className='art'>
          <div className='helper'></div>
        </div>
      </div>
    </div>
  )
}
