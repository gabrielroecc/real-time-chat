import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">FastTalk</span>
        <span className="title">Login</span>
        <form>
          <input type="email" name="" id="" placeholder="Digite o seu e-mail" />
          <input
            type="password"
            name=""
            id=""
            placeholder="Digite a sua senha"
          />
          <button>Entrar</button>
          <p>Ainda não tem uma conta? Cadastre-se!</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
