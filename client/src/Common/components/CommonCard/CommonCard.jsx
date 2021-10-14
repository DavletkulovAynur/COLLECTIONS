import React from 'react'
import {Link} from 'react-router-dom'
import './CommonCard.scss'
import {Bookmark} from 'Common/components/Bookmark/Bookmark'
import {API_URL} from '../../../config'
import {useDispatch, useSelector} from 'react-redux'
import {PointButton} from './templates/PointButton'
import {changeStatePopupAction} from '../../../Store/reducers/components/PopUpCardReducer'
import {UserLink} from './templates/UserLink'



// TODO smart component
export function CommonCard({data}) {
  const {owner} = useSelector((state) => state.authReducer)
  const {userId} = owner
  const dispatch = useDispatch()

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


  function deleteCollection(event, ownerCard) {
    event.preventDefault()
    // TODO вынести в отдельную функцию
    let $root = event.target.closest('[data-id-collection]');
    if (!$root) return;
    const idCollection = $root.dataset.idCollection

    dispatch(changeStatePopupAction({
      statePopUp: true,
      idCollection,
      ownerCard
    }))
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
                        <div className='Pin__avatar-and-button'>
                          <UserLink author={author} authorAvatar={authorAvatar} owner={owner} userId={userId}/>
                          <PointButton owner={owner} userId={userId} idCollection={_id} deleteCollection={deleteCollection}/>
                        </div>
                      </div>
                  </div>
                )
            })}
          </div>
    </>
  )
}
