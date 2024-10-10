import React from 'react'
// import { Outlet } from 'react-router-dom'
import { Sidebar } from '@components'

function Home() {
    return (
        <div className='ai-layout__container'>
            <Sidebar />
        </div>
        // <div className='ai'>
        //     <Outlet />
        // </div>
    )
}

export default Home