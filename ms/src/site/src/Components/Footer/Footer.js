import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

import DB from '../DB/DB'

export default  class Footer extends Component{
        constructor(){
            super()
            this.BANCO = new DB()
        }

        state = {
            email:''
        }

        limpar = () =>  {
            this.setState({
                email:''
            })
        }

        enviar = (e) =>{
            let valor = e.target.value
            let name = e.target.name
            this.setState({
                [name]:valor
            })
        }

        onSubmit = () =>{
            let estado =    {
                email:this.state.email
            }
            this.BANCO.dados(estado)
            this.limpar()
        }
       
        render(){
            return(
                <div className="conteinerFooter">
                    <div className="subConteinerFooter">
                    <label>email:</label>
                    <input
                    type="text"
                    placeholder="EX: cliente@gmail.com"
                    name="email"
                    value={this.state.email}
                    onChange={this.enviar}
                    />
                    <button className="btn" onClick={this.onSubmit}>enviar</button>
                    </div>
                    <h3>redes sociais </h3> {/**edita-las no site deixado por Jamilton */}
                    <p className="direitos">
                        Copyright&trade; Maravilhas do Século&copy;
                        todos os direitos reservados&copy;
                    </p>
                    
                </div>
            )
        }
}