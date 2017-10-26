import React, { Component } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './assets/style/style.css'

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            'email': '',
            'password': '',
            'errors': false,
        }

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validateURL = this.validateURL.bind(this);
        this.validateString = this.validateString.bind(this);
    }

    onChange(event){
        console.log('Target: ', event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        switch(name){
            case 'email':
                const emailValidity =  this.validateEmail(value);
                if(emailValidity) {
                    this.setState({
                        [event.target.name]: event.target.value,
                        'errors': false
                    });
                } else {
                    this.setState({
                        'errors': true
                    })
                }
                console.log('VALIDITY => ', emailValidity);
            case 'password':
                const passwordValidity =  this.validatePassword(value);
                if(passwordValidity) {
                    this.setState({
                        [event.target.name]: event.target.value,
                        'errors': false
                    });
                } else {
                    this.setState({
                        'errors': true
                    })
                }
                console.log('VALIDITY => ', passwordValidity);
        }
    }

    validateEmail(URL) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(URL)
    }

    validatePassword(password){
        const definedPassword = '16101990';
        return (password == definedPassword) ? true : false;
    }

    validateURL(URL) {
        const re = /^(?:https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
        return re.test(URL)
    }

    validateString(input){
        const str = /^[a-zA-Z ]+$/;
        return str.test(input);
    }
    
    onClick(){
        console.log('STATE => ', this.state);
    }

    render(){
        return(
            <div className="appContainer container">
                <h2 className='form-signin-heading'>Sign In</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input name='email' required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input name='password' required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.onChange} />
                    </div>
                    <small id="errorHelp" className={`${(this.state.errors) ? 'error': '' } alert alert-danger `}>Something is not right</small>
                    <button type="button" className="btn btn-primary" onClick={this.onClick}>Submit</button>
                </form>
            </div>
        )
    }
}