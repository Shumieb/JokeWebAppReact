import React from 'react'
import { NavLink } from 'react-router'

function Header() {
    return (
        <nav className="bg-primary mb-4 p-2">
            <div className="d-flex justify-content-between align-items-center mx-auto p-1">
                <NavLink className="text-white fs-4 p-1" to="/">Joke App</NavLink>
                <div className="p-1">
                    <NavLink className="text-white fs-5 mx-3 p-1" to="/">Home</NavLink>
                    <NavLink className="text-white fs-5 mx-3 p-1" to="/joke">Jokes</NavLink>
                    <NavLink className="text-white fs-5 mx-3 p-1" to="/favorite-jokes">Favorite Jokes</NavLink>
                    <NavLink className="text-white fs-5 mx-3 p-1" to="/about">About</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header