import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/header'
import Footer from '../Footer/footer'

function Layout() {
    return (
        <div className='mx-auto'>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout