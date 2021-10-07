import {ButtonLoading} from '../../../../Common/components/ButtonLoading/ButtonLoading'
import React from 'react'

export function AddCollectionButton({load, handleSubmit}) {
  return (
    <div className='Add-collection__button'>
      <button disabled={load} onClick={(event) => handleSubmit(event)}
              className='Button Button-root'>
        {!load ? 'Сохранить' : <ButtonLoading/>}
      </button>
    </div>
  )
}