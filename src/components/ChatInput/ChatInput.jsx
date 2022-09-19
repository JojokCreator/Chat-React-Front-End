import "./ChatInput.scss";
import React from 'react'

const ChatInput = ({ send, placeholder }) => {
  return (
    <div className="ChatInput">
      <input onKeyDown={send} placeholder={placeholder}/>
    </div>
  )
}  

export default ChatInput