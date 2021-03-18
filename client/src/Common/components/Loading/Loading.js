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
          {items.map(() => {
              return (
                  <div style={styleTest}></div>
              )
          })}

      </div>
  )
}
