import React from 'react'
import './Loading.scss'

export function Loading({colorLoading = '#fff'}) {
    const styleTest = {
        background: colorLoading
    }

    const items = []
    for(let i = 0; i < 12; i++ ) {
        items.push('')
    }

  return (
      <div className="lds-default">
          {items.map((item, index) => {
              return (
                  <div key={index} style={styleTest}></div>
              )
          })}

      </div>
  )
}
