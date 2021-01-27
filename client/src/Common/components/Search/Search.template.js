import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useInput} from '../../utils/hooks/input.hook'

export function SearchTemplate({searchResult, getInputValue}) {
	const search = useInput('')

	useEffect( () => {
			getInputValue(search.value)
	}, [search.value])

	return (
		<div className='Search'>
			<input type="text" className="search-input" placeholder="Search" {...search.bind}/>
			{search.value.length
				?  	<div className='show-result'>
							{SearchResultElements(searchResult)}
						</div>
				: 	null}

		</div>
	)
}

function SearchResultElements(searchResult) {
	if(searchResult.length) {
		return searchResult.map((item, index) => {
			return (
				<div key={index} className='item'>
					<Link to={`/article-view/${item._id}`}
								className='link'>
						<img src={item.img}/>
						<span className='title'>
							{item.title}
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