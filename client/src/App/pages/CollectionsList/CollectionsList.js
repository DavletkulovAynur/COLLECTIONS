import React from 'react'
import './CollectionsList.scss'
import {useSelector} from "react-redux";
import {Loading} from '../../../Common/components/Loading/Loading'
import {CommonCard} from '../../../Common/components/CommonCard/CommonCard'
import {useRouter} from '../../../Common/utils/hooks/useRouter.hook'

function CollectionsList() {
	const {allCollection} = useSelector(state => state.collectionReducer)
	const loading = useSelector(state => state.appReducer.loading)
	const error = useSelector(state => state.appReducer.error)
	const {myCollection} = useSelector(state => state.collectionReducer)
	const {pathname} = useRouter()



	console.log(allCollection)
	// красиво сделать
	if(error) {
		return (
			<div className='Collections-list'>
				<div className='error'>
					<div>При загрузке данных произошла ошибка</div>
					<div className='icon'></div>
				</div>

			</div>
		)
	}
	if(loading) {
		return (
			<div className='Collections-list'>
				<div className='loader'>
					<Loading/>
				</div>
			</div>
		)
	}

	if(pathname === '/my-collection'){
		return (
			<div className='Collections-list'>
				<div className='Com-main-grid'>
					<CommonCard data={myCollection}/>
				</div>
			</div>
		)
	}



	return (
		<div className='Collections-list'>
			<div className='Article Article-root Com-main-grid'>
				<CommonCard data={allCollection}/>
			</div>
		</div>
	);
}

export default CollectionsList