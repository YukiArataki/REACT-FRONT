//1- Todo componente deve começar com a primeira
//letra maiúscula
//2- Todo componente deve ser uma função
//3- Todo componente deve RETORNAR um elemento HTML
//4- Todo componente deve ser exportado

import { useEffect } from "react";

function ProdutoListar(){
    
    useEffect(() =>{
        //Função utilizada para executar algum código
        //ao abrir ou rendezirar o componente
        //AXIOS biblioteca de requisições HTTP
        fetch("https://viacep.com.br/ws/81280330/json/")
        .then(resposta => {
            return resposta.json();
        })
        .then(cep => {
            console.log(cep);
        })
    });
    
    return (
        <div>
            <h1>Primeiro Post!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adiction</p>
        </div>
        
    );
}

export default ProdutoListar;
//1- Exibir alguma informação do CEP no navegador
//2- Realizar a requisição para a sua API
//3- Resolver o problema de CORS que sera mostrado no console
//4- Exibir a lista de produtos no navegador 