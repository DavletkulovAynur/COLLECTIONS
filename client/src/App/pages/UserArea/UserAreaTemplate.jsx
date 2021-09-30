import React from 'react'
import './UserArea.scss'

import CollectionsList from '../../../Common/components/CollectionsList/CollectionsList'
import {UserInformation} from '../../../Common/components/UserInformation/UserInformation'

function UserAreaTemplate ({user, userCollection, unSubscribeOnUser, subscribeOnUser}) {

  return (
      <div className='User-area'>
          <section className='user-information'>
              <UserInformation
                  user={user}
                  unSubscribeOnUser={unSubscribeOnUser}
                  subscribeOnUser={subscribeOnUser}
                  guest='true'/>
          </section>
          <section>
            <CollectionsList data={userCollection}/>
          </section>
      </div>
  );
};

export default UserAreaTemplate;