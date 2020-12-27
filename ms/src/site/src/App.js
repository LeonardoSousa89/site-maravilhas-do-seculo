import react from 'react';
import React,{Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';

import Home from './Components/Home/Home'
import Fale from './Components/Fale/Fale'
import Sobre from './Components/Sobre/Sobre'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

export default class App extends Component{



      render(){
          return(
              <react.Fragment>
                 <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact={true} path="/" component={Home}/>
                        <Route exact={true} path="/fale" component={Fale}/>
                        <Route exact={true} path="/sobre" component={Sobre}/>
                    </Switch>
                    <Footer/>
                 </BrowserRouter>
              </react.Fragment>
          )
      }
}