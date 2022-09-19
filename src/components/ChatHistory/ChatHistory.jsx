import "./ChatHistory.scss";
import Message from "../Message/" 

const ChatHistory = ( {chatHistory, user} ) => {
  return (
    <div>
    {
      chatHistory.map(msg => {
        return (
        <Message user={user} key={msg.timestamp} message={msg.data} />
        )
      })    }
    </div>
  )
}

export default ChatHistory