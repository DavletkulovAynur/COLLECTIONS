import React from "react";

export function Select({options}) {

  const {data} = options
  return (
    <>
      <div className="select__backdrop" data-type="backdrop"></div>
      <div className="select__input" data-type='input'>
        <span data-type="value"></span>
        <i class="fas fa-chevron-down" data-type="arrow"></i>
      </div>
      <div class="select__dropdown">
        <ul class="select__list">
          {data.map((item) => {
            return (
              <div>
                {item.value}
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}
