import './Sidebar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'

const Sidebar = () => {
const[extended,setextended]=useState(false);
const  extender=()=>{
    setextended(!extended);
}


  return (
    <div className='sidebar'>
    <div className="top">
        <img onClick={extender} className="menu"src={assets.menu_icon} alt="Menu" />
        <div className="new-chat">
            <img src={assets.plus_icon} alt="Plus" />
           {extended===true?<p>New Chat</p>:null} 
        </div>
        {extended===true?<div className="recent">
            <p className="recent-tittle">Recent</p>
        <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>What is React...</p>
        </div>

        </div>:null}
        
    </div>
<div className="bottom">

<div className="bottom-item recent-entry">
    <img src={assets.question_icon} alt="" />
    {extended===true? <p>Help</p>:null} 
   
</div>
<div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended===true? <p>Activity</p>:null} 
          
        </div>
       <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended===true? <p>Settings</p>:null} 
           
        </div>

</div>


    </div>
  )
}

export default Sidebar