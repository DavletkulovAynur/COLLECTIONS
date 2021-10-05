import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function StylePin({changeStyleSelect}) {
  const [select, setSelect] = useState('middle')

  const styles = [
    {
      type: 'large'
    },
    {
      type: 'middle'
    },
    {
      type: 'small'
    }
  ]

  function selectStyle(event) {
    let $rootElement = event.target.closest('[data-select-type]');
    if (!$rootElement) return;
    setSelect($rootElement.dataset.selectType)
    changeStyleSelect($rootElement.dataset.selectType)
  }

  return (
    <div className='Style-pin Style-pin-root'>
      <section className='Style-pin__title'>
        Выберите стиль
      </section>
      <section className='Style-pin__elements'>
        {styles.map((item, index) => {
          return (
            <div data-select-type={item.type}
                 key={index}
                 onClick={(event) => selectStyle(event)}
                 className={`Style-pin__item Style-pin__item-${item.type}`}>
              <div className='Style-pin__item-shadow'></div>
              {select === item.type
                ? <div className='Style-pin__item-check'>
                    <FontAwesomeIcon icon='check' color='#fff'/>
                  </div>
                : null
              }

            </div>
          )
        })}
      </section>
    </div>
  )
}