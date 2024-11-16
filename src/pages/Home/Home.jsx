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

    const handleTitle = () => {
        if ((pathname).includes('events')) {
            return 'Acara'
        } else if ((pathname).includes('event/')) {
            return 'Detail Acara'
        }
        return 'TAMU'
    }

    return (
        <div className='ai-layout__container'>
            <Sidebar />
            <div className='ai-layout__content'>
                <div className='ai-layout__content-navbar'>
                    <h1 className='ai-layout__content-navbar--title'>{handleTitle()}</h1>
                    <div className='ai-layout__content-navbar__account'>
                        <p className='ai-layout__content-navbar__account--name'>
                            ARRASYID FADEL FATONSYAH
                        </p>

                        <div className='ai-layout__content-navbar__account-initial'>
                            <p>A</p>
                        </div>
                    </div>
                </div>
                <div className='ai-layout__content-content'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Home