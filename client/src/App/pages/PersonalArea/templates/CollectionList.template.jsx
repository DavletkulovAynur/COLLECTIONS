import React from 'react'
import CollectionsList from "../../../../Common/components/CollectionsList/CollectionsList";
import {useSelector} from "react-redux";

export function CollectionListTemplate({tabValue, user}) {
  const {myCollection, bookmarkCollection} = useSelector(state => state.collectionReducer)
  const {subscribe} = user

  return (
    <>
      {tabValue === 'my-collection' ? <CollectionsList data={myCollection}/> : null}
      {tabValue === 'archive' ? <CollectionsList data={bookmarkCollection}/> : null}
      {tabValue === 'subscribe-collection' ? <CollectionsList data={subscribe}/> : null}
    </>
  )
}