import React from 'react'
import '../../App.css'
import Rightsidebar from '../../components/Rightsidebar/Rightsidebar'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'

const Questions = () => {
    return (
        <div className='home-container-1'>
            <Leftsidebar />
            <div className='home-container-2'>
                <HomeMainbar />
                <Rightsidebar />
            </div>
        </div>
    )
}

export default Questions
