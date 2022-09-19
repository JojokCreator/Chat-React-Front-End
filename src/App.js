import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput/';
import { connect, sendMsg } from './api'

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [chatHistory, setChatHistory] = useState([]);

  const send = (e) => {
    if (e.target.value === "") {
      return
    } else {
      if (e.keyCode === 13) {
        sendMsg(`${e.target.value} */£$${user}`);
        e.target.value = "";
      }
    }
    }

    const login = (e) => {
      if (e.keyCode === 13) {
        if (e.target.value === "") {
          return
        } else {
          setUser(e.target.value);
          e.target.value = "";
        }
      }
    }

    useEffect(() => {
      connect((msg) => {
        setChatHistory([...chatHistory, msg])
      })
      setLoading(false)
    }, [chatHistory])

    if (!user) {
      return (
        <ChatInput placeholder={"Enter Name and press enter"} send={login} />
      )
    } else if (loading) {
      return (
        <div>Loading...</div>
      );
    } else {
    return (
      <div className="App">
        <Header />
        <ChatHistory user={user} chatHistory={chatHistory} />
        <ChatInput placeholder={"Type your message here"} send={send} />
      </div>
    );
  }
}

  export default App;
