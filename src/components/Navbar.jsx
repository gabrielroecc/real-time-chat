import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import userImg from "../images/user-img.jpg";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">FastTalk</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Sair do app</button>
      </div>
    </div>
  );
};

export default Navbar;
