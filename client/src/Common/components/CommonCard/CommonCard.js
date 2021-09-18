import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './CommonCard.scss'
import {Bookmark} from 'Common/components/Bookmark/Bookmark'
import {API_URL} from '../../../config'
import {useSelector} from 'react-redux'




export function CommonCard({data}) {
    const {userId} = useSelector((state) => state.authReducer)

  const divStyle = (owner, mainImg) => {
      return {
        backgroundImage: `url(${API_URL}/${owner}/compressed/${mainImg})`,
      }
    };

  function infoTemplate(_id, title, nameCollection, author, authorAvatar, owner, date) {
      const avatarUrl = authorAvatar ? `${API_URL + 'avatars/' + authorAvatar}` : false

      let link
      if(userId === owner) {
          link = `personal-area`
      } else {
          link = `user-area/${owner}`
      }
      return (
      <>
        <Bookmark id={_id} />
        <div>
          <span>{title}</span>
          <span>{date}</span>
        </div>
      </>
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
                    <Link to={`/article-view/${_id}`} key={_id} className={`Pin_card Pin_card__${test()}`} style={divStyle(owner, mainImg)}>
                      <div className='Pin_shadow'></div>
                      <div className='Pin_about'>
                        {infoTemplate(_id, title, nameCollection, author, authorAvatar, owner, date)}
                      </div>
                    </Link>
                )
            })}
          </div>
    </>
  )
}
