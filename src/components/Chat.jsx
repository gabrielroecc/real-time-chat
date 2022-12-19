import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import Video from "../images/video.svg";
import AddUser from "../images/adicionar-usuario.svg";
import More from "../images/pontos-de-menu.svg";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span> {data.user?.displayName} </span>
        <div className="chatIcons">
          <img src={Video} alt="" />
          <img src={AddUser} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
