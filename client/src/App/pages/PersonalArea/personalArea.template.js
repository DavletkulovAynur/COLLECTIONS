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

  console.log(bookmarkCollection)

  return (
    <div className='Personal-area'>
      <div className='user-info-tab-wrapper'>
        <section className=''>
          <UserInformation user={user} subscribe={subscribe}  countPublication={countPublication}/>
        </section>
        <section onClick={test} className='Personal-area__tab-box tab'>
          <div data-tab='my-collection' className={`tab__item ${tabValue == 'my-collection' ? 'tab_active' : ''}`}>
            <FontAwesomeIcon icon='stream' color='#888888' size="lg"/>
          </div>
          <div data-tab='archive'  className={`tab__item ${tabValue == 'archive' ? 'tab_active' : ''}`}>
            <FontAwesomeIcon icon={['fas', 'archive']} color='#888888' size="lg"/>
          </div>
          <div data-tab='subscribe-collection' className={`tab__item ${tabValue == 'subscribe-collection' ? 'tab_active' : ''}`}>
            <FontAwesomeIcon icon='user-friends' color='#888888' size="lg"/>
          </div>
        </section>
      </div>
      {tabValue == 'my-collection' ? <CollectionsList data={myCollection}/> : null}
      {tabValue == 'archive' ? <CollectionsList data={bookmarkCollection}/> : null}
      {tabValue == 'subscribe-collection' ? <CollectionsList data={subscribe}/> : null}
    </div>
  );
};

export default PersonalAreaTemplate;

