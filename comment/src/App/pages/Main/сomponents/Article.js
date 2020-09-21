import React, {useRef} from 'react'
import {CommonCard} from '../../../../Common/components/CommonCard/CommonCard'

import './styles/Article.scss'


function Article({games}) {
  return (
    <div className='Article Article-root Com-main-grid'>
      <CommonCard games={games}/>
    </div>
  )
}



export default Article
