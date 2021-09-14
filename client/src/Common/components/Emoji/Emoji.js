import React, {useState} from 'react'
import './Emoji.scss'

export function Emoji() {
  const [open, setOpen] = useState(false)
  const openContent = () => {
    setOpen(!open)
  }

  return (
    <div className='Emoji' data-emoji-wrapper>
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