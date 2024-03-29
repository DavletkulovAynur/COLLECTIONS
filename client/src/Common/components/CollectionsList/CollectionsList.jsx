import React from 'react'
import './CollectionsList.scss'
import {Loading} from '../../../Common/components/Loading/Loading'
import {CommonCard} from '../../../Common/components/CommonCard/CommonCard'
import empty from '../../assets/images/icons/empty.svg'
import {useSelector} from 'react-redux'
import { Shruggie } from '../Shruggie/Shruggie'


function CollectionsList({data = []}) {

	const {collectionLoader} = useSelector((state) => state.collectionReducer)

	// TODO случай ошибка

	// if(error) {
	// 	return (
	// 		<div className='Collections-list'>
	// 			<div className='error'>
	// 				<div>При загрузке данных произошла ошибка</div>
	// 				<div className='icon'></div>
	// 			</div>
	//
	// 		</div>
	// 	)
	// }


	if(collectionLoader) {
		return (
			<div className='Collections-list__loader'>
				<Loading/>
			</div>
		)
	}

	if(!data.length) {
		return (
			<div className='Collections-list__loader'>
				<Shruggie text='Ничего не найдено'/>
			</div>
		)
	}

	return (
		<div className='Collections-list'>
			<div className='Article Article-root Com-main-grid'>
				<CommonCard data={data}/>
			</div>
		</div>
	);
}

export default CollectionsList