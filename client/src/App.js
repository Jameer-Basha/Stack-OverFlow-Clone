import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Allroutes from './Allroutes';
import { fetchAllQuestions } from './actions/question.js';
import { fetchAllUsers } from './actions/users.js';

function App() {
  
  const dispatch = useDispatch()

  useEffect( ( ) =>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch])
  
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Allroutes />
      </Router>
    </div>
  );
}
export default App;
