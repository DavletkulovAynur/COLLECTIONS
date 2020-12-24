import React from 'react'
import {Search} from '../Search/Search'



import {Link} from 'react-router-dom'
import {NavbarUserInfo} from '../NavbarUserInfo/NavbarUserInfo'


export function HeaderTemplate() {
	return (
		<div className='Header'>
			<a className='logo' href="/"></a>

			<section className='search-wrapper'>
				<Search/>
			</section>

			<div className='mini-icons-container'>
				<section className='add-collection-button-wrapper'>
					<AddCollectionButton/>
				</section>

				<section className='bell-wrapper'>
					<div className='bell'></div>
				</section>

				<section>
					<NavbarUserInfo/>
				</section>
			</div>
		</div>
	)
}

function AddCollectionButton() {
	return (
		<Link to='/add'>
			<div className='button'></div>
		</Link>
	)
}