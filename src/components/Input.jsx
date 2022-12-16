import React from "react";
import SendImage from "../images/foto.svg";
import Attach from "../images/link.svg";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Digite sua mensagem..." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" name="" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img src={SendImage} alt="" />
        </label>
        <button>Enviar</button>
      </div>
    </div>
  );
};

export default Input;
