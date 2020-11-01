import React, {useState} from "react";
import './Select.scss'

export function Select({options}) {
  const [open, setOpen] = useState(false)
  const [selectValue, setSelectValue] = useState('default')
  const {data} = options
  
  function openSelect() {
    setOpen(!open)
  }

  function selectItem(event) {
    setSelectValue(event.target.id)
  }

  return (
    <div class={`Select ${open ? 'open' : ''}`} onClick={openSelect}>
      <div className="Select__backdrop" onClick={() => { setOpen(false)}}></div>
      <div className="Select__input" data-type='input'>
        <span data-type="value">{selectValue}</span>
        <i class="fas fa-chevron-down" data-type="arrow"></i>
      </div>
      <div class="Select__dropdown">
        <ul class="Select__list">
          {data.map((item) => {
            return (
              <div
                id={item.value}
                onClick={selectItem}
                className={`${
                  item.value == selectValue 
                    ? 'back' 
                    : ''}`}>
                {item.value}
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
