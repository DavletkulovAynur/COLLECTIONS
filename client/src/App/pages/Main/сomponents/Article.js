import React, {useRef} from 'react'
import {CommonCard} from '../../../../Common/components/CommonCard/CommonCard'

import './styles/Article.scss'


function Article({collection}) {
  return (
    <div className='Article Article-root Com-main-grid'>
      <CommonCard data={collection}/>
    </div>
  )
}



export default Article
