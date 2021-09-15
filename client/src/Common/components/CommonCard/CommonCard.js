import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './CommonCard.scss'
import {Bookmark} from 'Common/components/Bookmark/Bookmark'
import {API_URL} from '../../../config'
import {useSelector} from 'react-redux'
import pixelFace from '../../assets/images/pixel-face.svg'
import {clickBody} from "../../utils/clickBody";
import {Emoji} from "../Emoji/Emoji";




export function CommonCard({data}) {
    const {userId} = useSelector((state) => state.authReducer)

  const divStyle = (owner, mainImg) => {
      return {
        backgroundImage: `url(${API_URL}/${owner}/compressed/${mainImg})`,
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

  function infoTemplate(_id, title, nameCollection, author, authorAvatar, owner, date) {
      const avatarUrl = authorAvatar ? `${API_URL + 'avatars/' + authorAvatar}` : false

      let link
      if(userId === owner) {
          link = `personal-area`
      } else {
          link = `user-area/${owner}`
      }
      return (
      <div className='info'>
        <div className='main-content'>
          {/*<section className='date'>*/}
          {/*  Опубликовано: {date}*/}
          {/*</section>*/}
          <section className='info-wrapper'>
            <div className='info-name'>
              <Link to={`/article-view/${_id}`} className='title'>{title}</Link>
            </div>
            <Bookmark id={_id} />
          </section>
          {/*<section className='short-title'>*/}
          {/*  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem laborum maxime similique?*/}
          {/*</section>*/}
        </div>



      </div>
    )
  }

  const test = () => {
    const classNames = ['small', 'medium', 'large']
    return classNames[Math.floor(Math.random()*classNames.length)]
  }



  return (
    <>
      <div className="Pin Pin_container">
        {data.map((item) => {
              const {img,
                _id,
                date,
                title,
                nameCollection,
                owner,
                mainImg,
                author,
                authorAvatar} = item
                return (
                    <div key={_id} className={`Pin_card Pin_card__${test()}`} style={divStyle(owner, mainImg)}>
                      <Link  to={`/article-view/${_id}`} className='Pin_shadow'>
                        <div className='Pin_about'>

                          <div>
                            <h4>{title}</h4>
                          </div>
                        </div>
                      </Link>
                    </div>
                )
            })}
          </div>
    </>
  )
}



// <div key={_id} className='Common-card'>
//     {mediaTemplate(owner, mainImg)}
//     {infoTemplate(_id, title, nameCollection, author, authorAvatar, owner, date)}
// </div>
