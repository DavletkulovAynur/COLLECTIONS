import React from 'react'
import {Link} from 'react-router-dom'
import {Search} from '../Search/Search'
import pixelFace from '../../assets/images/pixel-face.svg'
import { IconButton } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import AddIcon from '@material-ui/icons/Add'





export function HeaderTemplate({avatarUrl, logOut}) {
	return (
		<div className='Header'>
			<Link to='/'>
				<div className='logo'></div>
			</Link>
			<Link to='/'>
				<div className='main-link-button'>
					Главная
				</div>
			</Link>

			<div className='search-wrapper'>
				<Search/>
			</div>

			<div className='mini-icons-container'>
				<section className='add-collection-button-wrapper'>
					<Link to='/add'>
						<IconButton color='inherit'>
							<AddIcon fontSize='default'/>
						</IconButton>
					</Link>
				</section>

				<section>
					<Tooltip title="Выйти">
						<IconButton color='inherit'>
							<ExitToAppIcon fontSize='default' onClick={logOut} />
						</IconButton>
					</Tooltip>

				</section>

				<section className='user-avatar'>
					<Link to='/personal-area'>
						<div className={`user`}>
							{avatarUrl
								? <img className='avatar' src={avatarUrl}/>
								: <div className='default-avatar'>
									<img src={pixelFace}/>
								</div>
							}
						</div>
					</Link>
				</section>
			</div>
		</div>
	)
}
