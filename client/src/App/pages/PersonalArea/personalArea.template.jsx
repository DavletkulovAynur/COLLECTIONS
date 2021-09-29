import React, {useState} from 'react';

import {UserInformation} from '../../../Common/components/UserInformation/UserInformation'

import './PersonalArea.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CollectionsList from "../../../Common/components/CollectionsList/CollectionsList";



const PersonalAreaTemplate = ({ user,
                                myCollection,
                                subscribe,
                                countPublication,
                                bookmarkCollection}) => {
  const [tabValue, setTabValue] = useState('my-collection');

  const test = (event) => {
    let $rootElement = event.target.closest('[data-tab]');
    if (!$rootElement) return;

    switch ($rootElement.dataset.tab) {
      case 'my-collection':
        setTabValue('my-collection')
        break
      case 'archive':
        setTabValue('archive')
        break
      case 'subscribe-collection':
        setTabValue('subscribe-collection')
        break
    }
  }

  return (
    <div className='Personal-area'>
      <div className='user-info-tab-wrapper'>
        <section className=''>
          <UserInformation user={user} subscribe={subscribe}  countPublication={countPublication}/>
        </section>
        {tabBoxTemplate()}
      </div>
      {tabValue === 'my-collection' ? <CollectionsList data={myCollection}/> : null}
      {tabValue === 'archive' ? <CollectionsList data={bookmarkCollection}/> : null}
      {tabValue === 'subscribe-collection' ? <CollectionsList data={subscribe}/> : null}
    </div>
  );

  function tabBoxTemplate() {
    const buttons = [
      {
        icon: 'stream',
        value: 'my-collection',
        description: 'Мои коллекции'
      },
      {
        icon: 'archive',
        value: 'archive',
        description: 'Мои сохранения'
      },
      {
        icon: 'user-friends',
        value: 'subscribe-collection',
        description: 'Коллекции друзей'
      }
    ]
    return (
      <section onClick={test} className='Personal-area__tab-box tab'>
        {buttons.map((button, index) => {
          const {icon, value, description} = button
          return (
            <div key={index} data-tab={`${value}`} className={`tab__element-wrapper ${tabValue === value ? 'tab_active' : ''}`}>
              <div className='tab__item'>
                <FontAwesomeIcon icon={`${icon}`} color='#888888'/>
              </div>
              <h4 className='tab__description'>{description}</h4>
            </div>
          )
        })}
      </section>
    )
  }
};

export default PersonalAreaTemplate;

