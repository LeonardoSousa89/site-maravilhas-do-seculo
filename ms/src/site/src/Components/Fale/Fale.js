import React, {Component} from 'react'
import Foto from '../../Assets/vida.jpg'
import './Fale.css'

import DB from '../DB/DB'

export default class Fale extends Component{
        constructor(){
            super()
            this.BANCO = new DB()
        }

        state = {
            nome:'',
            texto:''
        }

        limpar = () =>  {
            this.setState({
                nome:'',
                texto:''
            })
        }

        enviar = (e) =>  {
            let valor = e.target.value
            let name = e.target.name
            this.setState({
                [name]:valor
            })
        }

        onSubmit = () =>    {
            let estado = {
                nome:this.state.nome,
                texto:this.state.texto
            }
            this.BANCO.dados(estado)
            this.limpar()
        }

        render(){
            return(
                <div className="conteinerFale">
                   
                    <div className="ladoC">
                        <img className="foto" src={Foto}/>
                        <h3 className="sugest">sugestões e criticas</h3>
                        <label className="nm">nome:</label>
                        <input 
                        className="nome"
                        type="text"
                        placeholder="Ex:     Mario Frias"
                        name="nome"
                        value={this.state.nome}
                        onChange={this.enviar}
                        />
                        <label className="nm">texto:</label>
                        <textarea 
                        className="area"
                        type="text"
                        placeholder="Ex:  está muito bom"
                        name="texto"
                        value={this.state.texto}
                        onChange={this.enviar}
                        ></textarea>
                        <button 
                        className="env"
                        onClick={this.onSubmit}
                        >enviar</button>
                    </div>
                    

                    <div className="ladoD">
                        <h1 className="texto">breve descrição aqui</h1>
                    </div>
                </div>
            )
        }
}