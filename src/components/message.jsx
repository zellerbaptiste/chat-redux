import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="message">
      <h3>{message.author}</h3>
      <p>{message.content}</p>
    </div>
  );
};

export default Message;
