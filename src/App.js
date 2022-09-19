import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput/';
import { connect, sendMsg } from './api'

function App() {
  const [user, setUser] = useState()
  const [chatHistory, setChatHistory] = useState([])

  const send = (e) => {
    if (e.keyCode === 13) {
      sendMsg(`${e.target.value} */£$${user}`);
      e.target.value = "";
    }
  }

  const login = (e) => {
    if (e.keyCode === 13) {
      setUser(e.target.value);
      e.target.value = "";
    }
  }
 
  useEffect(() => {
  connect((msg) =>{
    console.log("New Message")
    setChatHistory([...chatHistory, msg ])
  })
  console.log(chatHistory)
  }, [chatHistory])

  if (!user) {
    return (
      <ChatInput placeholder={"Enter Name and press enter"} send={login}/>
    )
  }
  return (
    <div className="App">
      <Header />
      <ChatHistory user={user} chatHistory={chatHistory}/>
      <ChatInput placeholder={"Type your message here"} send={send}/>
    </div>
  );
}

export default App;
