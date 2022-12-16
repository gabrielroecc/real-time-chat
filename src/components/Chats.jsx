import React from "react";
import userImg from "../images/user-img.jpg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={userImg} alt="" />
        <div className="userChatInfo">
          <span>Gab</span>
          <p>Hello!</p>
        </div>
      </div>

      <div className="userChat">
        <img src={userImg} alt="" />
        <div className="userChatInfo">
          <span>Gab</span>
          <p>Hello!</p>
        </div>
      </div>

      <div className="userChat">
        <img src={userImg} alt="" />
        <div className="userChatInfo">
          <span>Gab</span>
          <p>Hello!</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
