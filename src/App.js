import "./App.css"
import Cadastro from "./Componentes/Cadastro";
import Listagem from "./Componentes/Listagem"
import { useState } from "react";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
function App() {
 
  
  const Usuario = {
    //chave: valor
    nome: "Felipe",
    idade: 19,
    status: true,
    endereco: {
      rua: "Rua X",
      numero: 139,
      complemento: "ap 20"
    },
    vacinas_covid19: ["Coronavac", "Coronavac", "Pfizer", "J&J", "Outra"]
  }
  
  const usuarios_padrao = [
      {nome: "Felipe", email:"felipe@gmail.com", status: true},
      {nome: "Conrado", email:"conrado@gmail.com", status: true},
      {nome: "Maria", email:"maria@gmail.com", status: false},
      {nome: "Pedrita", email:"pedrita@gmail.com", status: false}
  ] 
  
  const [ usuarios, alteraUsuarios ] = React.useState( usuarios_padrao );
  const [ editando, alteraEditando ] = React.useState(null);

  //console.log(usuarios)
  //console.log(Usuario)
  //console.log(Usuario.endereco.rua, Usuario.endereco.complemento)
  //console.log(Object.keys(Usuario))
  return (
   <div className="container">
     <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
    <div className="d-flex justify-content-around">
    <Listagem alteraEditando={alteraEditando} usuarios={usuarios}/>
    <Cadastro usuarios={usuarios} alteraUsuarios={alteraUsuarios}/>
    
    </div>
</div>
  );
}

export default App;
