import React, { useEffect } from 'react'
import './home.scss'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Sidebar } from '@components'

function Home() {
    /** data */
    const { pathname } = useLocation()
    const navigate = useNavigate()
    /** end data */

    /** lifecycles */
    useEffect(() => {
        if (pathname === '/') navigate('*')
    }, [pathname, navigate])
    /** end lifecycles */

    /** methods */
    const handleTitle = () => {
        if ((pathname).includes('send_invitation')) {
            return 'Bagikan Undangan Digital'
        }
        return 'Tamu Undangan'
    }
    /** end methods */

    return (
        <div className='ai-layout__container'>
            <Sidebar />
            <div className='ai-layout__content'>
                <div className='ai-layout__content-navbar'>
                    <h1 className='ai-layout__content-navbar--title'>{handleTitle()}</h1>
                </div>
                <div className='ai-layout__content-content'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Home