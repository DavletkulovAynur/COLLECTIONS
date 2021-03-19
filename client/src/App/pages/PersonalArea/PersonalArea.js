import React, {useEffect} from 'react'
import PersonalAreaTemplate from './personalArea.template'
import {useDispatch, useSelector} from 'react-redux'
import {getBookmarkCollectionAction} from "../../../Redux/actions/action";

export function PersonalArea() {
	const {avatar, userName, bookmark} = useSelector((state) => state.authReducer)
	const {myCollection, bookmarkCollection} = useSelector(state => state.collectionReducer)
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(getBookmarkCollectionAction(bookmark))
	}, [bookmark])



	return (
		<>
			<PersonalAreaTemplate
				userName={userName}
				myCollection={myCollection}
				bookmarkCollection={bookmarkCollection}
				avatar={avatar}
			/>
		</>
	)
}
