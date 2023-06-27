import React from 'react'
import {useSelector} from 'react-redux'
import './HomeMainbar.css'
import {Link,useLocation , useNavigate} from 'react-router-dom'
import QuestionsList from './QuestionsList'


const HomeMainbar = () => {
  const location =useLocation()
  const user=1;
  const navigate= useNavigate()
  const questionList = useSelector( state => state.questionReducer)
  /* console.log({questionLis})
    var questionList =[{
    _id : 1,
    upVotes: 2,
    downVotes:1,
    noOfAnswers:4,
    questionTitle : "what is html",
    questionBody:"Html is Hypertext Markup Language",
    questionTags:["html","css"],
    userPosted:"Jameer",
    userId:1,
    askedOn:"feb 12",
    answer: [{
      answerBody :"Answer",
      userAnswered:"basha",
      answeredOn :"feb13",
      userId:2
    }]
   },{
    _id : 2,
    upVotes: 12,
    downVotes:1,
    noOfAnswers:3,
    questionTitle : "what is html",
    questionBody:"Html is Hypertext Markup Language",
    questionTags:["html","css"],
    userPosted:"Jameer",
    userId:1,
    askedOn:"feb 12",
    answer: [{
      answerBody :"Answer",
      userAnswered:"basha",
      answeredOn :"feb13",
      userId:2
    }]
   },{
    _id : 3,
    upVotes: 21,
    downVotes:1,
    noOfAnswers:14,
    questionTitle : "what is html",
    questionBody:"Html is Hypertext Markup Language",
    questionTags:["html","css"],
    userPosted:"Jameer",
    userId:1,
    askedOn:"feb 12",
    answer: [{
      answerBody :"Answer",
      userAnswered:"basha",
      answeredOn :"feb13",
      userId:2
    }]
   }]
   */

  const checkAuth = () =>{
    if (user=== null ){
      alert("login or sign up to ask a question")
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
    
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        { 
         location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div >
        {
        questionList.data === null ?
        <h1>Loading..</h1>:
        <>
          <p>{questionList.data.length} Questions</p>
          <QuestionsList questionList={questionList.data}/>
        </>
       
      }
      </div>
    </div>
  )
}

export default HomeMainbar
