import React from 'react'
import {Link} from 'react-router-dom'
import {Search} from '../Search/Search'


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function HeaderTemplate({avatarUrl, logOut}) {
	return (
		<div className='Header'>
			<Link to='/'>
				<div className='Header__logo Logo'>
					<div className='Logo__icon'>
						<div className='test'></div>
					</div>
					<div className='Logo__text'>
						Collection
					</div>
				</div>
			</Link>
			{/*<Link to='/'>*/}
			{/*	<div className='main-link-button'>*/}
			{/*		Главная*/}
			{/*	</div>*/}
			{/*</Link>*/}

			<div className='search-wrapper'>
				<Search/>
			</div>

			<div className='mini-icons-container'>
				<section className='add-collection-button-wrapper'>
					<Link to='/add'>
						<FontAwesomeIcon icon='plus' color='#000'/>
					</Link>
				</section>

				<section>
					<div onClick={logOut}>
						<FontAwesomeIcon icon='sign-out-alt' color='#000'/>
					</div>
				</section>

				<section className='user-avatar'>
					<Link to='/personal-area'>
						<div className={`user`}>
							<img className='avatar' src={avatarUrl}/>
						</div>
					</Link>
				</section>
			</div>
		</div>
	)
}
