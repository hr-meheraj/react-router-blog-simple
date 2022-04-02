import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Nav.css"
function Nav() {
    return (
        <div className='nav'>
            <div>
                <h3 className='text-xl font-semibold'>ProHero.</h3>
            </div>
            <div className='nav-links'>
            <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'active-link' : 'link'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="blog"
            className={({ isActive }) =>
              isActive ? 'active-link' : 'link'
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive ? 'active-link' : 'link'
            }
          >
            Login
          </NavLink>
            </div>
        </div>
    )
}

export default Nav
