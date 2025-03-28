import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/header'
import Footer from '../Footer/footer'

function Layout() {
    return (
        <div className='mx-auto d-flex flex-column justify-content-between align-items-center min-vh-100'>
            <Header />
            <div className='h-100'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout