import React from 'react'
import { useLocation } from 'react-router-dom'

import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import './Users.css'
import UserList from './UserList'

const Users = () => {
  const location = useLocation()
  return (
    <div className='home-container-1'> 
        <Leftsidebar />
        <div className="home-container-2" style={{marginTop:"30px"}}>
            <h1 style={{ fontWeight:"400"}}>Users</h1>
            <UserList /> 
            
        </div>

    </div>
  )
}

export default Users
