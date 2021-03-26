import React, {useEffect} from 'react'
import PersonalAreaTemplate from './personalArea.template'
import {useDispatch, useSelector} from 'react-redux'
import {getBookmarkCollectionAction} from "../../../Redux/actions/action";
import {API_URL} from "../../../config";

export function PersonalArea() {
	const {avatar, userName, bookmark} = useSelector((state) => state.authReducer)
	const {myCollection, bookmarkCollection} = useSelector(state => state.collectionReducer)
	const dispatch = useDispatch()
	const avatarUrl = avatar ? `${API_URL + '/avatars/' + avatar}` : false
	const countPublication = myCollection.length


	useEffect(() => {
		dispatch(getBookmarkCollectionAction(bookmark))
	}, [bookmark])



	return (
		<>
			<PersonalAreaTemplate
				countPublication={countPublication}
				userName={userName}
				myCollection={myCollection}
				bookmarkCollection={bookmarkCollection}
				avatarUrl={avatarUrl}
			/>
		</>
	)
}
