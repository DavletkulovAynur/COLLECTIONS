import React from 'react'
import {Link} from 'react-router-dom'
import './CommonCard.scss'
import {User} from "Common/shared/User";
import {Bookmark} from 'Common/components/Bookmark/Bookmark'


export function CommonCard({data}) {
  const divStyle = (img) => {
    return {
      backgroundImage: 'url(' + img + ')',
    }
  };

  return (
    <>
    {data.map((item) => {
        return (
          <div key={item._id} className='Common-card'>
            <div className='Common-card__media'>
              <div className='Common-card__media-wrapper'>
                <div className='Common-card__media-wrapper-preview' style={divStyle(item.img)}></div>
              </div>
            </div>

            <div className='Common-card__info'>
              <div className='info-wrapper'>
                <span className="info-publisher">{item.nameCollection}</span>
                  <Bookmark id={item._id} />
                </div>
              </div>


              <div className='info-name'>
                <Link to={`/article-view/${item._id}`} className='title'>{item.title}</Link>
              </div>

              <User name={item.author}/>
            </div>
        )
      })}
      </>
  )
}
