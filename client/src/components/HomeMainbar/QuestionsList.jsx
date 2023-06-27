import React from 'react'
import Question from './Question'


const QuestionsList = ({questionList}) => {
  return (
    <>
    {
        questionList.map((question) =>(
        <Question question={question} key={question._id}/>
        ))
    }
    </>
  )
}

export default QuestionsList
