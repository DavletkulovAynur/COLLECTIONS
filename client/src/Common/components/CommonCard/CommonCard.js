import React, {useState} from 'react'
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
          <section className='date'>
            Опубликовано: {date}
          </section>
          <section className='info-wrapper'>
            <div className='info-name'>
              <Link to={`/article-view/${_id}`} className='title'>{title}</Link>
            </div>
            <Bookmark id={_id} />
          </section>
          <section className='short-title'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem laborum maxime similique?
          </section>
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

              <Emoji/>
          </div>
      </div>
    )
  }

  return (
    <>
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
          <div key={_id} className='Common-card'>
              {mediaTemplate(owner, mainImg)}
              {infoTemplate(_id, title, nameCollection, author, authorAvatar, owner, date)}
          </div>
        )
      })}
      </>
  )
}

const Emoji = () => {
    const [open, setOpen] = useState(false)
    const openContent = () => {
        setOpen(!open)
    }
    return (
    <div className='Emoji'>
      {open
        ? <div>
              <div className='emoji-container'>
               <section className='hidden-content'>
                <EmojiIlmira title='Смех' classEmotion='grinning'/>
                <EmojiIlmira title='Ржачь' classEmotion='laughing'/>
                <EmojiIlmira title='Нравится' classEmotion='love'/>
                <EmojiIlmira title='Грусть' classEmotion='sad'/>
                <EmojiIlmira title='Злость' classEmotion='angry'/>
                </section>
              </div>
              <div className='emoji-arrow'></div>
          </div>
        : null}

      <section className='user-emotion-wrapper'>
        <div onClick={openContent} className='emotion'>
          <span className='smile'></span>
          <span className='text'>Эмоции</span>
        </div>
      </section>
    </div>
  )
}

const EmojiIlmira = ({title, classEmotion}) => {
    return (
            <div className='emotions-popup-item'>
                <div className='emotions-popup-title'>{title}</div>
                <div className='emotions-popup-icon'>
                    <div className={classEmotion}></div>
                </div>
                <div className='emotions-popup-counter'>
                    <span>123</span>
                </div>
            </div>
    )
}