import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import "./ChatContent.scss";
import Avatar from "../ChatList/Avatar";
import ChatItem from "./ChatItem";

const ChatContent = () => {
  const messagesEndRef = useRef(null);
  const [chat, setChat] = useState([
    {
      key: 1,
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "",
      msg: "Hi , How are you?",
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I am fine.",
    },
    
  ]);
  const [msg, setMsg] = useState("");
  const [typing, setTyping] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === 13 && msg !== "") {
        const newChat = [
          ...chat,
          {
            key: chat.length + 1,
            type: "",
            msg: msg,
            image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
          },
        ];
        setChat(newChat);
        setMsg("");
        setTyping(false);
      }
    };

    const handleTyping = () => {
      setTyping(true);
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleTyping);

    if (!typing) {
      scrollToBottom();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleTyping);
    };
  }, [chat, msg, typing]);


  const onStateChange = (e) => {
    setMsg(e.target.value);
  };

  window.addEventListener('resize', function() {
    console.log('Viewport width:', window.innerWidth);
  });
  

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar
              isOnline="active"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
            />
            <p>StarLabs</p>
          </div>
        </div>
        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
              <i className="fa fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          {chat.map((itm, index) => (
            <ChatItem
              animationDelay={index + 2}
              key={itm.key}
              user={itm.type ? itm.type : "me"}
              msg={itm.msg}
              image={itm.image}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
        <button className="addFiles">
       <FontAwesomeIcon icon={faPlus} /> 
       </button>
   
          <input
            type="text"
            placeholder="Type a message "
            onChange={onStateChange}
            value={msg}
          />
         <button className="btnSendMsg" id="sendMsgBtn">
       <FontAwesomeIcon icon={faPaperPlane} />
       </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
