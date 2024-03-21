import React from "react";
import Avatar from "../ChatList/Avatar";

const ChatItem = ({ user, msg, image, onImageClick }) => {
  const isMediaMessage = React.isValidElement(msg) && (msg.type === 'img' || msg.type === 'video');

  return (
    <div style={{ animationDelay: `0.8s` }} className={`chat__item ${user ? user : ""}`}>
      <div className="chat__item__content">
        {isMediaMessage ? React.cloneElement(msg, { onClick: () => onImageClick(msg.props.src, msg.type === 'video') }) 
        : <div className="chat__msg">{msg}</div>}
      </div>
      <Avatar isOnline="active" image={image} />
    </div>
  );
};

export default ChatItem;
