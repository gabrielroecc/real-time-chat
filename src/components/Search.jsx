import React, { useState } from "react";
import userImg from "../images/user-img.jpg";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = () => {};
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          name=""
          id=""
          placeholder="Procure por um usuário"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="userChat">
        <img src={userImg} alt="" />
        <div className="userChatInfo">
          <span>Gab</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
