import { useState } from 'react';
import "./Message.scss";
import ReactTextFormat from 'react-text-format';

const Message = ({ message, key, user }) => {
  let body = JSON.parse(message);
  return (
    <div className={
    (body.user === user) ? "Message me" : "Message"}
    key={key}
    style={(body.user.length === 0) ? {backgroundColor: "green", color: "white", float: "none"}: {display: "flex"}}
    >
      <ReactTextFormat>{body.body}</ReactTextFormat>
      {(body.user) ?
        <div className="Name">
          {body.user}
        </div> : ""}
    </div>
  )
}

export default Message