import React,{Component} from 'react'
import './Sobre.css'

export default class Sobre extends Component{


        render(){
            return(
                <div className="conteinerSobre">
                    <div className="card">
                        <h1 className="titulo">nós somos</h1>
                        <h4 className="conteudo">descrição a respeito de nosso trabalho e nossa história</h4>
                        <h5 className="consideracao">considerações finais</h5>
                    </div>
                </div>
            )   
        }
}