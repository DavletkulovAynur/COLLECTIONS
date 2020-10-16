import React from 'react'
import {Link} from 'react-router-dom'
import './CommonCard.scss'

export function CommonCard({data}) {
  const divStyle = (img) => {
    return {
      backgroundImage: 'url(' + img + ')',
    }
  };
  console.log(data)
  return (
    <>
    {data.map((item) => {
        return (
          <div key={item._id} className='Common-card'>
            <div className='media'>
              <div className='media__wrapper'>
                <div className='media__wrapper-preview' style={divStyle(item.img)}></div>
              </div>
            </div>

            <div className='info'>
              <span className="info__publisher">{item.nameCollection}</span>
              <span className="info__publisher">{item.publisher}</span>
              <div className='info__name'>
                <Link to={`/article-view/${item._id}`} className='title'>{item.title}</Link>
              </div>
              <span className="info__publisher">{item.author}</span>
            </div>
          </div>
        )
      })}
      </>
  )
}
