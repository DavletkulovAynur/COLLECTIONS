import React, {useEffect} from 'react'
import PersonalAreaTemplate from './personalArea.template'
import {useDispatch, useSelector} from 'react-redux'
import {getBookmarkCollectionAction, getSubscribeCollectionAction} from '../../../Store/actions/action'


export function PersonalArea() {
	const {user, bookmark} = useSelector((state) => state.authReducer)
	const {myCollection, bookmarkCollection} = useSelector(state => state.collectionReducer)
	const {subscribe} = useSelector((state) => state.subscribeReducer)
	const dispatch = useDispatch()

	const countPublication = myCollection.length


	useEffect(() => {
		dispatch(getBookmarkCollectionAction(bookmark))
	}, [bookmark])

	useEffect(() => {
		// dispatch(getSubscribeCollectionAction(subscriptions))
	}, [])

	return (
		<>
			<PersonalAreaTemplate
				user={user}
				subscribe={subscribe}
				countPublication={countPublication}
				myCollection={myCollection}
				bookmarkCollection={bookmarkCollection}
			/>
		</>
	)
}
