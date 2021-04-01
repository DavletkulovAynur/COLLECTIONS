import React, {useEffect} from 'react'
import PersonalAreaTemplate from './personalArea.template'
import {useDispatch, useSelector} from 'react-redux'
import {getBookmarkCollectionAction, getSubscribeCollectionAction} from '../../../Redux/actions/action'
import {API_URL} from '../../../config'

export function PersonalArea() {
	const {avatar, userName, bookmark, subscriptions} = useSelector((state) => state.authReducer)
	const {myCollection, bookmarkCollection} = useSelector(state => state.collectionReducer)
	const {subscribe} = useSelector((state) => state.subscribeReducer)
	const dispatch = useDispatch()
	const avatarUrl = avatar ? `${API_URL + '/avatars/' + avatar}` : false
	const countPublication = myCollection.length


	useEffect(() => {
		dispatch(getBookmarkCollectionAction(bookmark))
	}, [bookmark])

	useEffect(() => {
		dispatch(getSubscribeCollectionAction(subscriptions))
	}, [])

	return (
		<>
			<PersonalAreaTemplate
				subscribe={subscribe}
				countPublication={countPublication}
				userName={userName}
				myCollection={myCollection}
				bookmarkCollection={bookmarkCollection}
				avatarUrl={avatarUrl}
				subscriptions={subscriptions}
			/>
		</>
	)
}
