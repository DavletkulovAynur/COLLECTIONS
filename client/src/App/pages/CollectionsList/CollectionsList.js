import React, {useEffect, useState} from 'react'
import './CollectionsList.scss'
import {useSelector} from "react-redux";
import {Loading} from '../../../Common/components/Loading/Loading'
import {CommonCard} from '../../../Common/components/CommonCard/CommonCard'


function CollectionsList() {
	const {allCollection} = useSelector(state => state.collectionReducer)
	const loading = useSelector(state => state.appReducer.loading)
	const error = useSelector(state => state.appReducer.error)
	const [test, setTest] = useState([])


	const className = () => {
		const classNames = ['small', 'medium', 'large']
		return classNames[Math.floor(Math.random()*classNames.length)]
	}

	useEffect(() => {
		const test1 = allCollection.map((item) => {
			return {...item, classTest: className()}
		})
		setTest(test1)
	}, [allCollection])


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

	return (
		<div className='Collections-list'>
			<div className='Article Article-root Com-main-grid'>
				<CommonCard data={test}/>
			</div>
		</div>
	);
}

export default CollectionsList