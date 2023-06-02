import React from "react";
import { toast } from "react-toastify";
function Cadastro({usuarios, setUsuarios}){
    const [ nome, alteraNome ] = React.useState("");
    const [ email, setEmail ] = React.useState("");
    const [ Status, alteraStatus ] = React.useState(true);
    function salvar(e){
        e.preventDefault()
        
        const Usuario = {
         nome: nome,
         email: email,
         Status: Status 
        }
      if(verifica()){
        setUsuarios([...usuarios, Usuario])
      }
       }
      function veriEmail(email){
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email)
      }
    function verifica(){
      if(!nome){
        toast('✖. Digite um Nome!')
        return;
      }
      if(nome.length < 3){
        toast('✖. Não Aceitamos Nomes Com Menos de 3 Caracteres.')
        return;
      }
      if(!email){
        toast('✖. Digite um e-mail!')
        return;
      }
      if(!veriEmail(email)){
        toast('✖! Digite um e-mail Valido!')
        return;
      }
      return true;
    }  
    return(
    <div className="caixa"> 
      <h2> Cadastro </h2>
      <form onSubmit={(e) => salvar(e)}>
        <div class="mb-3 form-floating">
          <input onChange={ e => alteraNome(e.target.value) } class="form-control" placeholder="Nome" id="txtNome"/>
          <label for="txtNome" class="form-label">Nome</label>
        </div>
        <div className="mb-3 form-floating">
          <input onChange={ e => setEmail(e.target.value) } className="form-control" id="txtNome" placeholder="Nome"/>
          <label htmlFor="txtNome" className="form-label">Email</label>
        </div>
        <div class="mb-3 form-check">
          <input checked={Status} onChange={ e => alteraStatus( e.target.checked ) } type="checkbox" class="form-check-input" id="cboxStatus"/>
          <label class="form-check-label" for="cboxStatus">Ativo</label>
        </div>
        <button type="submit" class="btn btn-primary">Salvar</button>
      </form>
      <br/>
</div>

)
}

export default Cadastro;
