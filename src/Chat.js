import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import axios from './axios';
import { useState } from 'react';
import './Chat.css';

const Chat = ({ messages }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post('/api/v1/messages/new', {
      message: input,
      name: "Shreyas Amrutkar",
      timestamp: "Just Now",
      received: true
    });

    setInput("");
  };

  return ( 
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>RoomName</h3>
          <p>Last Seen at..</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p className={`chat__message ${message.received && "chat__reciever"}`}>
          <span className="chat__name">{message.name}</span>
          {message.message}
          <span className="chat__timestamp">
            {message.timestamp}
          </span>
        </p>
        ))}
      </div>
        <div className="chat__footer">
          <InsertEmoticon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
              type="text"
            />
            <button onClick={sendMessage}
            type="submit">
              Send a message
            </button>
          </form>
          <Mic />
        </div>
    </div>
   );
}
 
export default Chat;