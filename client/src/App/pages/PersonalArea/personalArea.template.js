import React, {useState} from 'react';

import {CommonCard} from '../../../Common/components/CommonCard/CommonCard'
import {UserInformation} from '../../../Common/components/UserInformation/UserInformation'

import './PersonalArea.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const PersonalAreaTemplate = ({ avatarUrl,
                                myCollection,
                                subscribe,
                                countPublication,
                                subscriptions,
                                userName,
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
                <UserInformation subscribe={subscribe} subscriptions={subscriptions} countPublication={countPublication} avatarUrl={avatarUrl} userName={userName}/>
            </section>

            <section onClick={test} className='Personal-area_tab-box tab'>
              <div data-tab='my-collection' className={`tab_item ${tabValue == 'my-collection' ? 'tab__active' : ''}`}>
                <FontAwesomeIcon icon='stream' color='#888888' size="lg"/>
              </div>
              <div data-tab='archive'  className={`tab_item ${tabValue == 'archive' ? 'tab__active' : ''}`}>
                <FontAwesomeIcon icon={['fas', 'archive']} color='#888888' size="lg"/>
              </div>
              <div data-tab='subscribe-collection' className={`tab_item ${tabValue == 'subscribe-collection' ? 'tab__active' : ''}`}>
                <FontAwesomeIcon icon='user-friends' color='#888888' size="lg"/>
              </div>
            </section>
        </div>


        <section className='Collections-list'>
            <div className='Com-main-grid'>
                {tabValue == 'my-collection' ? <CommonCard data={myCollection}/> : null}
                {tabValue == 'archive' ? <CommonCard data={bookmarkCollection}/> : null}
                {tabValue == 'subscribe-collection' ? <CommonCard data={subscribe}/> : null}
            </div>
        </section>
    </div>
  );
};

export default PersonalAreaTemplate;

