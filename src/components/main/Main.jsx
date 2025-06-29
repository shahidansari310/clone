import React from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Find hidden places around the world</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Give me creative startup ideas</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Write a message to my friend</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Explain this code snippet</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search">
                    <input type="text" placeholder="Enter yout prompt here..." className='b'/>
                    <div className='flex'>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <div className='place-self-center mt-4 text-gray-500 '>Gemini can make mistakes</div>
            </div>
        </div>
    </div>
  )
}

export default Main
