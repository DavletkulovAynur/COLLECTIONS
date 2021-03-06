import React from 'react'
import {Link} from 'react-router-dom'
import './CommonCard.scss'

import {Bookmark} from 'Common/components/Bookmark/Bookmark'
import {API_URL} from '../../../config'



export function CommonCard({data}) {

  const divStyle = (owner, mainImg) => {
    return {
      backgroundImage: `url(${API_URL}/${owner}/${mainImg})`,
    }
  };

  function mediaTemplate(owner, mainImg) {
    return (
      <div className='Common-card__media'>
        <div className='Common-card__media-wrapper'>
          <div className='Common-card__media-wrapper-preview' style={divStyle(owner, mainImg)}></div>
        </div>
      </div>
      )

  }

  function infoTemplate(_id, title, nameCollection) {
    return (
      <div className='info'>
        <div className='info-wrapper'>
          <section className='user-emotion-wrapper'>
            <div className='emotion'>
              <span className='smile'></span>
              <span className='text'>Эмоции</span>
            </div>
          </section>

          <Bookmark id={_id} />
        </div>

        <div className='info-name'>
          <Link to={`/article-view/${_id}`} className='title'>{title}</Link>
        </div>

        <span className="info-publisher">{nameCollection}</span>


      </div>
    )
  }

  return (
    <>
    {data.map((item) => {
      const {img,
            _id,
            title,
            nameCollection,
              owner,
              mainImg,
            author} = item
        return (
          <div key={_id} className='Common-card'>
            <div>
              {mediaTemplate(owner, mainImg)}
              {infoTemplate(_id, title, nameCollection)}
            </div>
          </div>
        )
      })}
      </>
  )
}
