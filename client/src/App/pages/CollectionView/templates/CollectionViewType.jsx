import React from 'react'
import {typeCollection} from '../../../../config'

export function CollectionViewType({nameCollection}) {
  const a = typeCollection.find((item) => item.value === nameCollection)

  return (
    <div>
      {a?.label
        ? <div className='Article-view__type'>
          {a.label}
        </div>
        : null
      }
    </div>

  )
}