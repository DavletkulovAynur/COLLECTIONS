import React, {useState} from 'react';

import {CommonCard} from '../../../Common/components/CommonCard/CommonCard'
import TabsComponent from '../../../Common/components/Tabs/Tabs'
import {UserInformation} from '../../../Common/components/UserInformation/UserInformation'

import './PersonalArea.scss'



const PersonalAreaTemplate = ({ avatarUrl,
                                myCollection,
                                  subscribe,
                                countPublication,
                                  subscriptions,
                                userName,
                                bookmarkCollection}) => {
    const [tabValue, setTabValue] = useState(0);

    const changeTabs = (newValueTabs) => {
        setTabValue(newValueTabs)
    }



  return (
    <div className='Personal-area'>
        <div className='user-info-tab-wrapper'>
            <section>
                <UserInformation subscriptions={subscriptions} countPublication={countPublication} avatarUrl={avatarUrl} userName={userName}/>
            </section>

            <section className='tab-wrapper'>
                <TabsComponent tabValue={tabValue} changeTabs={changeTabs}/>
            </section>
        </div>


        <section className='Collections-list'>
            <div className='Com-main-grid'>
                {tabValue == '0' ? <CommonCard data={myCollection}/> : null}
                {tabValue == '1' ? <CommonCard data={bookmarkCollection}/> : null}
                {tabValue == '2' ? <CommonCard data={subscribe}/> : null}
            </div>
        </section>
    </div>
  );
};

export default PersonalAreaTemplate;

