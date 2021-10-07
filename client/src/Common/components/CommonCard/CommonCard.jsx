import React from 'react'
import {Link} from 'react-router-dom'
import './CommonCard.scss'
import {Bookmark} from 'Common/components/Bookmark/Bookmark'
import {API_URL} from '../../../config'
import {useSelector} from 'react-redux'
import {DefineAvatarUrl} from "../../utils/DefineAvatarUrl";




export function CommonCard({data}) {
    const {owner} = useSelector((state) => state.authReducer)
  const {userId} = owner

  const divStyle = (owner, mainImg) => {
      return {
        backgroundImage: `url(${API_URL}/${owner}/compressed/${mainImg})`,
      }
    };

  function infoTemplate(_id, title, date) {
      return (
      <>
        <section className='Pin__about-inside'>
          <Bookmark id={_id} />
          <div>
            <div className='Pin__about-title'>{title}</div>
          </div>
        </section>
      </>
    )
  }


  const UserLink = ({authorAvatar, owner, author}) => {

    const avatarUrl = DefineAvatarUrl(authorAvatar)

    let link
    if(userId === owner) {
      link = `personal-area`
    } else {
      link = `user-area/${owner}`
    }
    return (
      <Link to={link}>
        <section className='Pin__about-author'>
          <img className='Pin__about-author-avatar' src={avatarUrl}/>
          <span className='Pin__about-author-name'>{author}</span>
        </section>
      </Link>
    )
  }

  return (
    <>
      <div className="Pin Pin_container">
        {data.map((item) => {
              const {
                _id,
                date,
                title,
                nameCollection,
                owner,
                mainImg,
                author,
                stylePin,
                authorAvatar} = item
                return (
                  <div key={_id} className={`Pin_card Pin_card__${stylePin}`} style={divStyle(owner, mainImg)}>
                      <div className='Pin__shadow'></div>
                      <div className='Pin__about'>
                        <Link to={`/article-view/${_id}`}>
                          {infoTemplate(_id, title, nameCollection, author, authorAvatar, owner, date)}
                        </Link>
                        <UserLink author={author} authorAvatar={authorAvatar} owner={owner}/>
                      </div>
                  </div>
                )
            })}
          </div>
    </>
  )
}