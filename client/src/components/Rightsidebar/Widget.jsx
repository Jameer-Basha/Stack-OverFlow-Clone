import React from 'react'
import './Rightsidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/blacklogo.svg'
const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blogs</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width={15}/>
                <p>Observibility is key to the future of software (and DevOps career)</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width={15}/>
                <p>Podacast 374:How Valuable is your screen name for otherss </p>
            </div>
        </div>
        <h4>Featured on meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width={15}/>
                <p>Review queue workflows -  Final release will be soonss..............</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width={15}/>
                <p>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blacklogo} alt="pen" width={15}/>
                <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
            </div>
        </div>
        <h4>Hot Meta posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                    <p>38</p>
                    <p>Why was this spam flag declined, yet the question marked as spam?</p>
                </div>
            <div className='right-sidebar-div-2'>
                <p>20</p>
                <p>What is the best course of action when a user has high enough rep to...</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>14</p>
                <p>Is a link to the "How to ask" help page a useful comment?</p>
            </div>
        </div>
    </div>
  )
}

export default Widget
