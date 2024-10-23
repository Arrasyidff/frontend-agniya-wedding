import React from 'react'
import { Outlet } from 'react-router-dom'
// import { Sidebar } from '@components'

function Home() {
    return (
        <div className='ai-layout__container'>
            {/* <Sidebar /> */}
            <Outlet />
        </div>
        // <div className='ai'>
        // </div>
    )
}

export default Home