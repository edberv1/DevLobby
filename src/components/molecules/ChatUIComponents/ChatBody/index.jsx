
import React from "react";
import "./ChatBody.scss";
import ChatList from "../ChatList";
import ChatContent from "../ChatContent";

const ChatBody = () => {
    return (
      <div className="first_chatbody">
        <ChatList />
        <ChatContent/>
        
      </div>
    );
  };
  
  export default ChatBody;