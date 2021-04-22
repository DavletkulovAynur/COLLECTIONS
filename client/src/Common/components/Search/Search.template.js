import React from 'react'
import {Link} from 'react-router-dom'
import {API_URL} from '../../../config'

export function SearchTemplate({search, searchResult, viewResultSearch, searchCollectionState}) {
	return (
		<div className='Search'>
			<input type="text" className="search-input" placeholder="Search" {...search.bind}/>
			{search.value.length
			?  	<div className='show-result'>
						<SearchResultElements searchCollectionState={searchCollectionState}
																	searchResult={searchResult}
																	viewResultSearch={viewResultSearch}
																	/>
					</div>
			: 	null }
		</div>
	)
}

function SearchResultElements({searchResult, searchCollectionState, viewResultSearch}) {

	if(searchCollectionState) {
		return (
			<div>Loading</div>
		)
	}

	if(searchResult.length) {
		return searchResult.map((collection, index) => {
			const {_id, mainImg, title, owner} = collection
			const divStyle = (owner, img) => {
				return {
					backgroundImage: `url(${API_URL}${owner}/compressed/${img})`,
				}
			};
			return (
				<div key={index} className='item'>
					<Link onClick={() => viewResultSearch()} to={`/article-view/${_id}`}
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