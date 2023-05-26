import "./App.css"
import Cadastro from "./Componentes/Cadastro";
import Listagem from "./Componentes/Listagem"
import { useState } from "react";
import React from "react";

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
      {nome: "Felipe", status: true},
      {nome: "Conrado", status: true},
      {nome: "Maria", status: false},
      {nome: "Pedrita", status: false}
  ] 
  
  const [ usuarios, alteraUsuarios ] = React.useState( usuarios_padrao );

  //console.log(usuarios)
  //console.log(Usuario)
  //console.log(Usuario.endereco.rua, Usuario.endereco.complemento)
  //console.log(Object.keys(Usuario))
  return (
   <div className="container">
    <div className="d-flex justify-content-around">
    <Listagem usuarios={usuarios}/>
    <Cadastro usuarios={usuarios} alteraUsuarios={alteraUsuarios}/>
    
    </div>
</div>
  );
}

export default App;
