import { useState } from 'react'
import { NavLink, Link } from 'react-router'
import { FaAlignJustify } from "react-icons/fa6";

function Header() {

    const [showMobileNav, setShowMobileNav] = useState(false)

    return (
        <nav className="mb-3 mb-md-5 w-100">
            <div className="d-flex justify-content-between align-items-center mx-auto p-1 bg-primary w-100">
                <NavLink className="text-white fs-4 p-1" to="/">Joke App</NavLink>
                <div className='d-block d-md-none pr-2'>
                    <button
                        className="btn text-white btn-primary"
                        type="button"
                        onClick={() => setShowMobileNav(!showMobileNav)}
                    >
                        <FaAlignJustify />
                    </button>
                </div>
                <div className="p-1 d-none d-md-block">
                    <NavLink className="text-white fs-5 mx-3 p-1" to="/">Home</NavLink>
                    <NavLink className="text-white fs-5 mx-3 p-1" to="/joke">Jokes</NavLink>
                    <NavLink className="text-white fs-5 mx-3 p-1" to="/favorite-jokes">Favorite Jokes</NavLink>
                    <NavLink className="text-white fs-5 mx-3 p-1" to="/about">About</NavLink>
                </div>
            </div>

            {
                showMobileNav &&
                (
                    <div className="d-block d-md-none w-100">
                        <ul className="navbar-nav me-auto px-4 d-flex flex-row justify-content-between align-items-center py-2">
                            <li>
                                <Link to="/" className="fs-6 text-primary-emphasis">Home</Link>
                            </li>
                            <li>
                                <Link to="/joke" className="fs-6 text-primary-emphasis">Jokes</Link>
                            </li>
                            <li>
                                <Link to="/favorite-jokes" className="fs-6 text-primary-emphasis">Favorite Jokes</Link>
                            </li>
                            <li>
                                <Link to="/about" className="fs-6 text-primary-emphasis">About</Link>
                            </li>
                        </ul>
                    </div>
                )
            }
        </nav>
    )
}

export default Header