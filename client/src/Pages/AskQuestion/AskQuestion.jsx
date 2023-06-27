import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './AskQuestion.css'
import { askQuestion } from '../../actions/question'

const AskQuestion = () => {

  const [questionTitle,setQuestionTitle]= useState('')
  const [questionBody,setQuestionBody]= useState('')
  const [questionTags,setQuestionTags]= useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const User = useSelector((state) => (state.currentUserReducer))
  
  const handleSubmit =(e) =>{
    e.preventDefault()
    dispatch(askQuestion({questionTitle , questionBody , questionTags ,userPosted: User.result.name , userId :User.result._id} , navigate))
   // console.log({questionTitle, questionBody , questionTags})
  }

  return (
    <div className='ask-question'>
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>Be specific and insight you're asking question to others</p>
              <input type="text" id='ask-ques-title' placeholder='eg:What are the heading tags in HTML ' onChange={(e) => {setQuestionTitle(e.target.value)}} />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>Include all the information someone need to answer your question</p>
              <textarea name="" id="ask-ques-body" cols="30" rows="10" onChange={(e) => {setQuestionBody(e.target.value)}}  ></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add upto 5 tags that are describe your question</p>
              <input type="text" id='ask-ques-tags' placeholder='eg: html ,css , javascript ' onChange={(e) => {setQuestionTags(e.target.value.split(" "))}}/>
            </label>

          </div>
          <input type="submit" value='Review Your Question' className='review-btn'/>

        </form>
      </div>
      

    </div>
  )
}

export default AskQuestion
