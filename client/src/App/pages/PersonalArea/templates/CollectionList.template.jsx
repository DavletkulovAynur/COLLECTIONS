import React from 'react'
import CollectionsList from '../../../../Common/components/CollectionsList/CollectionsList'
import {useSelector} from 'react-redux'

export function CollectionListTemplate({tabValue}) {
  const {myCollection, bookmarkCollection, subscriptionsCollection} = useSelector(state => state.collectionReducer)
  
  return (
    <>
      {tabValue === 'my-collection' ? <CollectionsList data={myCollection}/> : null}
      {tabValue === 'archive' ? <CollectionsList data={bookmarkCollection}/> : null}
      {tabValue === 'subscribe-collection' ? <CollectionsList data={subscriptionsCollection}/> : null}
    </>
  )
}