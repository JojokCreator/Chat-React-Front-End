import { useState } from 'react';
import "./Message.scss";

const Message = ({ message, key, user }) => {
  let body = JSON.parse(message);
  return (
    <div className={
    (body.user === user) ? "Message me" : "Message"}
    key={key}
    style={(body.user.length === 0) ? {backgroundColor: "green", color: "white", float: "none"}: {display: "flex"}}
    >
      <div>{body.body}</div>
      {(body.user) ?
        <div className="Name">
          {body.user}
        </div> : ""}
    </div>
  )
}

export default Message