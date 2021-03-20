import React from 'react'
import {Search} from '../Search/Search'



import {Link} from 'react-router-dom'
import {NavbarUserInfo} from '../NavbarUserInfo/NavbarUserInfo'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../../../Redux/actions/action";


export function HeaderTemplate() {
	// const {} = useSelector((state) => state.authReducer)
	const dispatch = useDispatch()

	const logOut = () => {

		dispatch(logoutAction())
		localStorage.removeItem('token')
	}
	return (
		<div className='Header'>
			<Link to='/'>
				<div className='logo'></div>
			</Link>


			<section className='search-wrapper'>
				<Search/>
			</section>

			<div className='mini-icons-container'>
				<section className='add-collection-button-wrapper'>
					<Link to='/add'>
						<AddIcon fontSize='large'/>
					</Link>
				</section>

				<section>
					<ExitToAppIcon onClick={logOut} fontSize='default'/>
				</section>

				<section>
					<NavbarUserInfo/>
				</section>
			</div>
		</div>
	)
}
