import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter as Router,Link, useNavigate} from 'react-router-dom';
import decode from 'jwt-decode'

import './Navbar.css';
import logo from '../../assets/logo.png';
import search from '../../assets/magnifying-glass-solid.svg';
import Avathar from '../Avathar/Avathar';
import { setCurrentUser } from '../../actions/currentUser';

const Navbar = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  var user=useSelector((state) => state.currentUserReducer)

  useEffect(() => {
    const token = user?.token 
    if(token){
        const decodedToken = decode(token)
        if(decodedToken.exp * 1000 < new Date().getTime()){
            handleLogout()
        }
    }
    dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
},[user?.token, dispatch])

  const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  return (
    <nav className='navbar-nav'>
        <div className='navbar'>
         
            <Link className='nav-item nav-logo'>
              <img src={logo} alt='logo' />
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For me</Link>
            <form >
              <input type="text" placeholder='Search'/>
              <img src={search} alt='search' width={16}  className='search-icon'/>
            </form>
            { user === null ?
          <Link to='/Auth' className='nav-item nav-links' >Login</Link>:
          <>
          <Avathar backgroundColor="#6391fa" color="white" marginLeft="-30px" px="12px" py="7px" fontSize="15px" curser="pointer" borderRadius="50%"><Link to={`/Users/${user.result._id}`} style={{color:'white',textDecoration:'none'}}>{user.result.name.charAt(0).toUpperCase()}</Link></Avathar>
          <button className='nav-item nav-links' onClick={handleLogout}>Logout</button>
          </>
         }
         
        </div>
    </nav>
  )
}
export default Navbar