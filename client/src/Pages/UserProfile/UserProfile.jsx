import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'


import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import Avathar from '../../components/Avathar/Avathar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UserProfile.css'

const UserProfile = () => {

    const {id} = useParams()
    const users = useSelector( (state) =>state.usersReducer)
    const currentProfile = users.filter((user) =>user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)

    const [Switch , setSwitch] = useState(false)
    
  return (
    <div className='home-container-1'>
        <Leftsidebar />
        <div className="home-container-2">
            <section>
                <div className="user-details-container">
                    <div className="user-details">
                        <Avathar backgroundColor="purple" color="white" fontSize="35px" px="40px" py="25px">
                            {currentProfile?.name.charAt(0).toUpperCase()} 
                        </Avathar>
                        <div className="user-name">
                            <h1>{currentProfile?.name}</h1>
                            <p><FontAwesomeIcon icon={faBirthdayCake}/> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                        </div>
                    </div>
                    {
                        currentUser?.result._id === id && (
                            <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn' >
                                <FontAwesomeIcon icon={faPen} />Edit Profile
                            </button>
                        )
                    }
                </div>
                <>
                    {
                        Switch ?(
                            <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
                        ):(
                            <ProfileBio currentProfile={currentProfile}/>
                        )
                    }
                </>
                
            </section>
        </div>
    </div>
  )
}

export default UserProfile
