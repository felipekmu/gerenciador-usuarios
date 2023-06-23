import "./App.css"
import Cadastro from "./Componentes/Cadastro";
import Listagem from "./Componentes/Listagem"
import supabase from "./supabase";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
function App() {
  const [ usuarios, alteraUsuarios ] = React.useState( [] );
  const [ editando, alteraEditando ] = React.useState(null);

function buscaTodos(){
  supabase.from("usuarios").select()
  .then( response => {
    console.log("Conexão bem sucedida!");
    console.log( response.data );
    alteraUsuarios( response.data );
  } )
  .catch( response => {
    console.log("Deu erro na conexão");
    console.log( response )
  } )
}

React.useEffect( ()=> {
  buscaTodos();
}, [] )
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
