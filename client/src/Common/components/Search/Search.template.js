import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useInput} from '../../utils/hooks/input.hook'
import {API_URL} from '../../../config'

export function SearchTemplate({searchResult, getInputValue}) {
	const search = useInput('')
	useEffect( () => {
			getInputValue(search.value)
	}, [search.value])

	const handleClick = () => {
		console.log('super')
		getInputValue('')
	}

	return (
		<div className='Search'>
			<input type="text" className="search-input" placeholder="Search" {...search.bind}/>
			{search.value.length
				?  	<div className='show-result'>
							<SearchResultElements searchResult={searchResult} handleClick={handleClick}/>
					</div>
				: 	null}

		</div>
	)
}

function SearchResultElements({searchResult, handleClick}) {
	const test = () => {
		handleClick()
	}
	if(searchResult.length) {
		return searchResult.map((collection, index) => {
			const {_id, mainImg, title, owner} = collection
			console.log(collection)
			const divStyle = (owner, img) => {
				return {
					backgroundImage: `url(${API_URL}${owner}/${img})`,
				}
			};
			return (
				<div key={index} className='item'>
					<Link onClick={test} to={`/article-view/${_id}`}
								className='link'>
						<div className='test' style={divStyle(owner, mainImg)}></div>
						<span className='title'>
							{title}
						</span>
					</Link>
				</div>
			)
		})
	} else {
		return (
			<div>
				<h1>ничего не найдено</h1>
			</div>
		)
	}
}