import React from "react";
import userImg from "../images/user-img.jpg";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={userImg} alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello!</p>
        <img src={userImg} alt="" />
      </div>
    </div>
  );
};

export default Message;
