import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <nav className='todo-nav'>
        <div className='logo'>
            <img src='/images/Content.png' alt='logo'/>

            <img src='/images/mobile-menu.png' className='mobile-menu-nav' alt='logo'/>



        </div>

        <div className='nav-menu'>
            <div className='nav-button-card'>
                <img src='/images/Icon.png' alt="settings-button"/>

            </div>
            <div className='nav-button-card'>
                <img src='/images/Icon.svg' alt="notifications-button"/>

            </div>
            <div className='nav-profile-img'>
                <img src='/images/Avatar.png' alt="profile-img"/>

            </div>

        </div>


    </nav>
  )
}

export default Nav