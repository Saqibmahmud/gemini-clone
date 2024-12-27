
import { useContext } from 'react';
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context';

import './Main.css'

const Main = () => {
const context = useContext(Context);
if (!context) {
    throw new Error("Context must be used within a Provider");
}
const { onSend,showResult, input, setinput ,recentPrompt,resultData} = context;




  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="User" />
        </div>
        <div className="main-container">
           
            { !showResult? <> <div className="greet">
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
        </div>  </> :
        
            <div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt="User" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="Gemini" />
                    <p dangerouslySetInnerHTML={{__html: resultData}}></p> 
                </div>
            </div>
        }
         
            


        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>{setinput(e.target.value)}}value={input} type="text" placeholder="Enter Prompt here" />
               <div>
                <img src={assets.gallery_icon} alt="Gallery" />
                <img src={assets.mic_icon} alt="Mic" />
                <img onClick={() => onSend(input)} src={assets.send_icon} alt="Send" />

               </div>
               </div>
               
               <p className='bottom-info'>
                Gemini can provide inaccurate answers also! Please re-confirm sensitive information before sharing.-saqib
               </p>
            
        </div>
        </div>





    </div>
  )

}
export default Main