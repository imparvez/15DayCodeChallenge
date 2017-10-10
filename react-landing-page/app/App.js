import React, { Component } from 'react'
import Header from './Components/Header'
import Jumbotron from './Components/Jumbotron'
import Marketing from './Components/Marketing'
import Footer from './Components/Footer'

export default class App extends Component {
    render(){
        return(
            <div className="appContainer container">
                <Header />
                <Jumbotron />
                <Marketing />
                <Footer />
            </div>
        )
    }
}