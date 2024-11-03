import React, { useEffect } from 'react'
import './home.scss'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Sidebar } from '@components'

function Home() {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (pathname === '/') navigate('/guests')
    }, [pathname, navigate])

    return (
        <div className='ai-layout__container'>
            <Sidebar />
            <div className='ai-layout__content'>
                <div className='ai-layout__content-header'>
                    <h1>Para Tamu</h1>
                </div>
                <div className='ai-layout__content-content'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Home