import React from 'react'
import Rightsidebar from '../../components/Rightsidebar/Rightsidebar';
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar';
import '../../App.css'
const Home = () => {
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

export default Home
