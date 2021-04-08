import React from 'react'
import {Link} from 'react-router-dom'
import './CommonCard.scss'
import {Bookmark} from 'Common/components/Bookmark/Bookmark'
import {API_URL} from '../../../config'
import {useSelector} from 'react-redux'
import pixelFace from '../../assets/images/pixel-face.svg'




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

  function infoTemplate(_id, title, nameCollection, author, authorAvatar, owner) {
      const avatarUrl = authorAvatar ? `${API_URL + 'avatars/' + authorAvatar}` : false

      let link
      if(userId === owner) {
          link = `personal-area`
      } else {
          link = `user-area/${owner}`
      }
      return (
      <div className='info'>
        <div className='info-wrapper'>
            <div className='info-name'>
                <Link to={`/article-view/${_id}`} className='title'>{title}</Link>
            </div>

          <Bookmark id={_id} />
        </div>

          <div className='test'>
              <Link to={link}>
                  <div className='author'>
                      {avatarUrl
                            ? <img className='avatar' src={avatarUrl}/>
                            : <img className='avatar' src={pixelFace}/>
                      }
                      <div className='name'>{author}</div>
                  </div>
              </Link>

              <section className='user-emotion-wrapper'>
                  <div className='emotion'>
                      <span className='smile'></span>
                      <span className='text'>Эмоции</span>
                  </div>
              </section>
          </div>
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
            author,
            authorAvatar} = item

        return (
          <div key={_id} className='Common-card'>
              {mediaTemplate(owner, mainImg)}
              {infoTemplate(_id, title, nameCollection, author, authorAvatar, owner)}
          </div>
        )
      })}
      </>
  )
}
