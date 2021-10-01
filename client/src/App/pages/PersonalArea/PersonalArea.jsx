import React, {useEffect, useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {getBookmarkCollectionAction, getSubscribeCollectionAction} from '../../../Store/actions/action'
import {UserInformation} from "../../../Common/components/UserInformation/UserInformation";
import {TabTemplates} from "./templates/Tab.templates";
import {CollectionListTemplate} from "./templates/CollectionList.template";
import './PersonalArea.scss'


export function PersonalArea() {
	const dispatch = useDispatch()
	const {owner, bookmark} = useSelector((state) => state.authReducer)
	const {numberUserPublications} = useSelector((state) => state.collectionReducer)
	const [tabValue, setTabValue] = useState('my-collection');



	useEffect(() => {
		dispatch(getBookmarkCollectionAction(bookmark))
	}, [bookmark])

	useEffect(() => {
		// dispatch(getSubscribeCollectionAction(subscriptions))
	}, [])

	function changeTabValue(typeValue) {
		setTabValue(typeValue)
	}


	return (
		<div className='Personal-area Personal-area-root'>
			<section className='Personal-area__info-and-tab-box'>
				<UserInformation numberUserPublications={numberUserPublications} user={owner}/>
				<TabTemplates changeTabValue={changeTabValue} tabValue={tabValue}/>
			</section>
			<CollectionListTemplate user={owner} tabValue={tabValue}/>
		</div>
	)
}
