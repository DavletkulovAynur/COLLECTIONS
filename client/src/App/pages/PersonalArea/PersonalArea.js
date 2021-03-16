import React from 'react'
import PersonalAreaTemplate from './personalArea.template'
import {useSelector} from 'react-redux'

export function PersonalArea() {
	const {avatar, userName} = useSelector((state) => state.authReducer)
	const {myCollection} = useSelector(state => state.collectionReducer)

	return (
		<>
			<PersonalAreaTemplate
				userName={userName}
				myCollection={myCollection}
				avatar={avatar}
			/>
		</>
	)
}
