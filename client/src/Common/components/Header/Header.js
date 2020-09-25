import React from 'react'
import './Header.scss'

export function Header() {
    return (
        <div className='Header'>
            <div className='Header-wrapper'>
                <div className='Header-item'>
                    <a className='Header-item-link Header-logo' href="/">
                        <div className='Logo'></div>
                    </a>
                </div>
                <div className='Header-item'>
                    <form className='Header-search-form' >
                        <div className='Header-search-input'>
                            <input type="text" className="header__search__input" placeholder="Искать "/>
                        </div>
                    </form>
                </div>
                <div className='Header-item'>
                    <a href='/' className="Header-item-link">Вход</a>
                    <a href='/' className="Header-item-link">Регистрация</a>
                </div>
            </div>
        </div>
    )
}