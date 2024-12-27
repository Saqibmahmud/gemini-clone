
import { assets } from '../../assets/assets'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="User" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello ,Saqib</span></p>
                <p>How can I help you today?</p>
            </div>
       
        <div className="cards">
            <div className="card">
                <p>Suggest Beautiful places to see in road trip</p>
                <img src={assets.compass_icon} alt="Compass" />
            </div>
            <div className="card">
                <p>Generate ideas for my new business</p>
                <img src={assets.bulb_icon} alt="bulb" />
            </div>
            <div className="card">
                <p>Suggest some nice messages</p>
                <img src={assets.message_icon} alt="message" />
            </div>
            <div className="card">
                <p>Fix this Code</p>
                <img src={assets.code_icon} alt="Code" />
            </div>
        </div>


        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder="Enter Prompt here" />
               <div>
                <img src={assets.gallery_icon} alt="Gallery" />
                <img src={assets.mic_icon} alt="Mic" />
                <img src={assets.send_icon} alt="Send" />

               </div>
               </div>
               
               <p className='bottom-info'>
                Gemini can provide in accurate answers also! Please re-cinfirm sensitive information before sharing.-saqib
               </p>
            
        </div>
        </div>





    </div>
  )
}

export default Main