import React from "react";
import Messages from "./Messages";
import Input from "./Input";
import Video from "../images/video.svg";
import AddUser from "../images/adicionar-usuario.svg";
import More from "../images/pontos-de-menu.svg";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Gab</span>
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
