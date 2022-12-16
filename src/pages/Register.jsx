import React from "react";
import Add from "../images/camera.svg";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">FastTalk</span>
        <span className="title">Cadastre-se</span>
        <form>
          <input type="text" name="" id="" placeholder="Digite o seu nome" />
          <input type="email" name="" id="" placeholder="Digite o seu e-mail" />
          <input
            type="password"
            name=""
            id=""
            placeholder="Digite a sua senha"
          />
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Adicione uma foto</span>
          </label>
          <button>Cadastrar</button>
          <p>Já tem uma conta? Clique aqui para fazer o login</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
