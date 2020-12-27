const USUARIOS = '_USUARIOS'


//aqui será o banco com conexão ao firebase
export default class Clientes {


    dados = (cliente) =>    {
       let clientes = localStorage.getItem(USUARIOS)
       if(!clientes){
           clientes = []
       }else{
           clientes = JSON.parse(clientes)
       }

       clientes.push(cliente)
       localStorage.setItem(USUARIOS, JSON.stringify(clientes))
    }
}