import React from "react";
function Cadastro(props){
    const [ nome, alteraNome ] = React.useState("");
    const [ Status, alteraStatus ] = React.useState(true);
    function salvar(e){
        e.preventDefault()
        
        const Usuario = {
         nome: nome,
         Status: Status 
        }
        props.alteraUsuarios( [ ...props.usuarios, Usuario] )
       }  
    return(
    <div className="caixa"> 
      <h2> Cadastro </h2>
      <form onSubmit={(e) => salvar(e)}>
        <div class="form-floating mb-3">
          <input onChange={ e => alteraNome(e.target.value) } class="form-control" placeholder="Nome" id="txtNome" />
          <label for="txtNome" class="form-label">Nome</label>
        </div>
        <div class="mb-3 form-check">
          <input checked={Status} onChange={ e => alteraStatus( e.target.checked ) } type="checkbox" class="form-check-input" id="cboxStatus"/>
          <label class="form-check-label" for="cboxStatus">Ativo</label>
        </div>
        <button type="submit" class="btn btn-primary">Salvar</button>
      </form>
      <br/>
      <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email para Cadastro</label>
</div>
<button type="submit" class="btn btn-primary">Cadastrar</button>
</div>

)
}

export default Cadastro;
