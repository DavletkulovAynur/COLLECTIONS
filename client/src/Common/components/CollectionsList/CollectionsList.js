import React from 'react'
import './CollectionsList.scss'
import {Loading} from '../../../Common/components/Loading/Loading'
import {CommonCard} from '../../../Common/components/CommonCard/CommonCard'


function CollectionsList({data = []}) {



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

	if(!data.length) {
		return (
			<div className='Collections-list'>
				<div className='loader'>
					<Loading/>
				</div>
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