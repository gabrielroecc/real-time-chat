import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import Add from "../images/camera.svg";
import { useNavigate, Link } from "react-router-dom";
const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">FastTalk</span>
        <span className="title">Cadastre-se</span>
        <form onSubmit={handleSubmit}>
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
          {err && <span>Algo deu errado, tente novamente</span>}
          <p>
            Já tem uma conta? Clique aqui para fazer o
            <Link to="/login">login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
